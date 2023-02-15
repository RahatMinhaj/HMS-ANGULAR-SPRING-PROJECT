import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Operation } from 'src/app/ModelClass/Operation.model';
import { Patient } from 'src/app/ModelClass/Patient.model';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit,ICommonComp<Operation> {
  
  operationForm!:FormGroup;


  pList!:Patient[];
  docList!:Doctor[];
  

  constructor(
    private formBuilder:FormBuilder
  ){}
  
  
  ngOnInit(): void {
    this.operationForm =this.formBuilder.group({
      id:[''],
      p_id:[''],
      doc_id:[''],
      operation_charge:[''],
      operation_date:['']
    })
  }
 


  

 // ==============Table Properties===========
 datasource: any;
 displayedColumns: string[] = ['id', 'p_id', 'doc_id',"operation_charge","operation_date", "action"]
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
    throw new Error('Method not implemented.');
  }
  edit(model: Operation, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }





}
