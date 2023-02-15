import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Cabin } from 'src/app/ModelClass/Cabin.model';
import { CabinService } from 'src/app/Service/cabin.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cabincreate',
  templateUrl: './cabincreate.component.html',
  styleUrls: ['./cabincreate.component.css']
})
export class CabincreateComponent implements OnInit,ICommonComp<Cabin> {
  
  cabinForm!:FormGroup;





  
  constructor(
    private formBuilder:FormBuilder,
    private cabinService:CabinService
  ){}
  


  ngOnInit(): void {
    this.cabinForm = this.formBuilder.group({
      id:[''],
      cabin_no:[''],
      cabin_type:[''],
      floor:[''],
      cabin_fare:[''],
      cabin_status:['Free']
    })
  }
  
  

 // ==============Table Properties===========
 datasource: any;
 displayedColumns: string[] = ['id', 'cabin_type', 'floor',"cabin_fare","action"]
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
    throw new Error('Method not implemented.');
  }
  create(): void {
   this.cabinService.save(this.cabinForm.value).subscribe(
      
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
  edit(model: Cabin, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }


}
