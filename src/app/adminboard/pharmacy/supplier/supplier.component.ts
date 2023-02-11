import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Supplier } from 'src/app/ModelClass/Supplier.model';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit,ICommonComp<Supplier> {
 
  supplierForm!:FormGroup;



 constructor(
  private http:HttpClient

 ){}
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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

  
 
 getmethod(){
console.log("componeklndlfffffffffffffffffffffffffffffffffffff")
  this.http.get("http://localhost:8080/supplier/test");
 }
 
 
 
 
  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {
    throw new Error('Method not implemented.');
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
