import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Department } from 'src/app/ModelClass/Department.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit,ICommonComp<Doctor>{




  deptList!: Department[];
  createDocForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
     private deptService: DepartmentService,
     private DocService:DoctorService,
     private router:Router
    ) { }




    onchange(value : string){
console.log(value + " =============FORM DOCTOR COMP")
    }


  getAll() {
    throw new Error('Method not implemented.');
  }




  create(): void {
    if (this.createDocForm.valid) {
      console.log(this.createDocForm.value.first_name);
      console.log(this.createDocForm.value.picture.value);

      this.DocService.save(this.createDocForm.value).subscribe((data) => {
        alert("Doctor Added" + data);
        this.ngOnInit();
        this.router.navigateByUrl("/admin/doctors")
      });
    } else {
      alert("Please Fill The Field Properly")
    }
  }

  // file!:File;
  // onFileChange(event:Event){
  //   this.file = event.target!.files[0];
  // }






  edit(model: Doctor, modal?: any): void {
    throw new Error('Method not implemented.');
  }


  updateData() {
    throw new Error('Method not implemented.');
  }



  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }



  ngOnInit(): void {
    this.createDocForm = this.formBuilder.group({
      id: [""],
      first_name: [''],
      last_name: [''],
      mobile: [''],
      dept_id: [''],
      degree: [''],
      specialization: [''],
      details: [''],
      visit_charge: [''],
      doc_join_date: [''],
      picture:['']

    })



    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
    });

  }





}
