import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from 'src/app/ModelClass/Department.model';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit{

  createDocForm!:FormGroup;


  constructor(private formBuilder:FormBuilder, private deptService:DepartmentService){}

  deptList!: Department[];

  ngOnInit(): void {
   this.createDocForm = this.formBuilder.group({
  first_name:[''],
  last_name:[''],
  mobile:[''],
  dept_id:[''],
  degree:[''],
  specialization:[''],
  details:[''],
  visit_charge:[''],
  doc_join_date:[''],

   })



   this.deptService.getAll().subscribe((data: Department[]) => {
    this.deptList = data;
  });



  }


  createDoc(){



    console.log(this.createDocForm.value.first_name)
    console.log(this.createDocForm.value.last_name)
    console.log(this.createDocForm.value.mobile)
    console.log(this.createDocForm.value.degree)
    console.log(this.createDocForm.value.specialization)
    console.log(this.createDocForm.value.details)
    console.log(this.createDocForm.value.dept_id)


    // console.log("dddddddddddddddddddddddddd"+this.deptList)
  }

  
}
