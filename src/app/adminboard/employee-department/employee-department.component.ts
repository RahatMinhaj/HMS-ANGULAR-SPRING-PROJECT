import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-department',
  templateUrl: './employee-department.component.html',
  styleUrls: ['./employee-department.component.css']
})
export class EmployeeDepartmentComponent implements OnInit{
  createEmployeeDepartment!:FormGroup;

  

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.createEmployeeDepartment = this.formBuilder.group({
      ed_id:[''],
      ed_name:[''],
      ed_manager:['']
    })
  }

  createED(){


  }

}
