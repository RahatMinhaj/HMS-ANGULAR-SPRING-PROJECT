import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Appointment } from 'src/app/ModelClass/Appointment.model';
import { Department } from 'src/app/ModelClass/Department.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css'],
})
export class NewappointmentComponent
  implements OnInit, ICommonComp<Appointment>
{
  deptList!: Department[];

  appointForm!: FormGroup;
  docNameStatus = true;
  deptSelect='';
  docByDepartment!: Doctor[];
  onSelect(aDept: string) {
    const selectedDeptId = aDept;
    const split = selectedDeptId.split(": ");
    const depTID = parseInt(split[1])
  // console.log(selectedDeptId);
    // console.log(value.id + "==================================dddddddd")
    if (depTID == null) {
      
    } else {  
      this.docService
        .getDocByDepartment(depTID)
        .subscribe((data: Doctor[]) => {
          this.docByDepartment = data;
          this.docNameStatus = true;
          console.log(data)
        });
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private deptService:DepartmentService,
    private docService: DoctorService
  ) {}

  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {
    console.log(typeof this.appointForm.value.apDate);
  }
  edit(model: Appointment, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.appointForm = this.formBuilder.group({
      id: [''],
      apSerial: [''],
      apFirstName: [''],
      apLastName: [''],
      apMobile: [''],
      apDate: [''],
      apEntryDate: [''],
      apDocDepartments: [''],
      apDocName: [''],
      apLocation: [''],
      apGender: [''],
      apAge: [''],
      apDeseaseDetails: [''],
      emp_id: [''],
      apStatus: [''],
    });



    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
    })
  }
}
