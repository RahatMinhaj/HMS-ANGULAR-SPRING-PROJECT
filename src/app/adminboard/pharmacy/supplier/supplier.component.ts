import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Supplier } from 'src/app/ModelClass/Supplier.model';
import { SupplierService } from 'src/app/Service/supplier.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit,ICommonComp<Supplier> {
 
  supplierForm!:FormGroup;
  supplierList!:Supplier[];



 constructor(
  private formBuilder:FormBuilder,
  private supplierService:SupplierService

 ){}
 
  ngOnInit(): void {

    this.supplierForm = this.formBuilder.group({
      id:[''],
      sup_company_name:[''],
      sup_location:[''],
      sup_phone:[''],
      sup_email:[''],
    })

    
    
     this.getAll();   
  }



  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = ['id', 'sup_company_name', 'sup_location',"sup_phone","sup_email","action"]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue;
    // this.deptList.sort = 
    // this.deptList.filter = filterValue.trim().toLowerCase();
    // if (this.deptList.paginator) {
    //   this.deptList.paginator.firstPage();
    // }
    // }
  }

  
 
  getAll() {

    this.supplierService.getAll().subscribe((data: Supplier[]) => {
      this.supplierList = data;
      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Supplier>(this.supplierList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });
  }


  create(): void {
    this.supplierService.save(this.supplierForm.value).subscribe(
      
      data =>{
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data saved !',
          // text: 'Data Not Found',
          icon: 'success',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        })
        this.ngOnInit();

    },
    error =>{
      Swal.fire({
        // title: 'Are you sure !',
        title: 'Data Cannot be saved !',
        text: 'Spring Server Issue',
        icon: 'error',
        // showCancelButton: true,
        // confirmButtonText: 'Yes',
        // cancelButtonText: 'No',
      })  

    })

  }
  edit(model: Supplier, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }


}
