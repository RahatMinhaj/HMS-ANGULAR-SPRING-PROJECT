import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Department } from 'src/app/ModelClass/Department.model';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  docDeptForm!: FormGroup;
  deptList!: Department[];

  constructor(
    private formBuilder: FormBuilder,
    private deptService: DepartmentService
  ) {}

  ngOnInit() {
    this.docDeptForm = this.formBuilder.group({
      id:[""],
      dept_name: [''],
      dept_manager: [''],
    });

    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
    });
  }

  createDept() {
    console.log(this.docDeptForm.value.dept_name);
    this.deptService.save(this.docDeptForm.value).subscribe((data) => {
      this.ngOnInit();
    });
  }
}
