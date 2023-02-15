import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { PathologyType } from 'src/app/ModelClass/PathologyType.model';
import { PathologytypeService } from 'src/app/Service/pathologytype.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pathologycategory',
  templateUrl: './pathologycategory.component.html',
  styleUrls: ['./pathologycategory.component.css']
})
export class PathologycategoryComponent implements OnInit,ICommonComp<PathologyType> {

  pathologyTypeForm!:FormGroup;
  pathologyTypeList!:PathologyType[];

constructor(
  private formBuilder:FormBuilder,
  private pathologyTypeservice:PathologytypeService
){}



    // ==============Table Properties===========
    datasource: any;
    displayedColumns: string[] = ['id', 'pathology_name', 'pathology_desc',"pathology_price", "action"]
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





  ngOnInit(): void {
this.pathologyTypeForm = this.formBuilder.group({
  id:[''],
  pathology_name:[''],
  pathology_desc:[''],
  pathology_price:[''],
})

    this.getAll();
  }






  getAll() {
    this.pathologyTypeservice.getAll().subscribe((data: PathologyType[]) => {
      this.pathologyTypeList = data;
      // ===========data table properties===============
      this.datasource = new MatTableDataSource<PathologyType>(this.pathologyTypeList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });
  }
  create(): void {
    this.pathologyTypeservice.save(this.pathologyTypeForm.value).subscribe(
      
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
  edit(model: PathologyType, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }
  
}
