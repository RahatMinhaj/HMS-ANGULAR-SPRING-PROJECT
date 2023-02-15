import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Cabin } from 'src/app/ModelClass/Cabin.model';
import { CabingAllotment } from 'src/app/ModelClass/CabinAllotment.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Patient } from 'src/app/ModelClass/Patient.model';

@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.component.html',
  styleUrls: ['./cabin.component.css']
})
export class CabinComponent implements OnInit,ICommonComp<CabingAllotment>{
  allotmentForm!:FormGroup;



    // Patient list
    patientList!:Patient[];
    // cabin list
    cabinList!:Cabin[];
    // doctor list
    docList!:Doctor[];



constructor(
  private formBuilder:FormBuilder
){}


  ngOnInit(): void {
    this.allotmentForm = this.formBuilder.group({

      id:[''],
      p_id:[''],
      p_name:[''],
      cabin_id:[''],
      doc_id:[''],
      allotment_date:[''],
      discharge_date:[''],
      
    })
  }
  
  
  
  
  
  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: CabingAllotment, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }


}
