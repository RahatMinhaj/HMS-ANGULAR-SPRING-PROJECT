import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      emp_id:[''],
      emp_first_name:[''],
      emp_last_name:[''],
      emp_dob:[''],
      emp_mobile:[''],
      emp_address:[''],
      emp_email:[''],
      emp_join_date:[''],
      ed_id:[''],
      emp_salary:[''],
      emp_picture:[''],
      emp_NID:['']
    })
  }

  createEmp() {

  }


}
