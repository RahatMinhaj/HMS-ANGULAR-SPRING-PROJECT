import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Cabin } from 'src/app/ModelClass/Cabin.model';
import { CabinAllotment } from 'src/app/ModelClass/CabinAllotment.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { CabinService } from 'src/app/Service/cabin.service';
import { CabinallotmentService } from 'src/app/Service/cabinallotment.service';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';
import { PatientService } from 'src/app/Service/Patient.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cabin',
  templateUrl: './cabin.component.html',
  styleUrls: ['./cabin.component.css'],
})
export class CabinComponent implements OnInit, ICommonComp<CabinAllotment> {
  allotmentForm!: FormGroup;

  // Patient list
  patientList!: Patient[];
  // cabin list
  cabinList!: Cabin[];
  // doctor list
  docList!: Doctor[];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private docService: DoctorService,
    private cabinService: CabinService,
    private cabinAllotmentService:CabinallotmentService
  ) {}


  ngOnInit(): void {
    this.allotmentForm = this.formBuilder.group({
      id: [''],
      p_id: [''],
      p_name: [''],
      cabin_id: [''],
      doc_id: [''],
      allotment_date: [''],
      discharge_date: [''],
      cabin_status:['Engaged']
    });

    this.getAll();
  }

  getAll() {
    // Loading Patient Data
    this.patientService.getAll().subscribe((data: Patient[]) => {
      this.patientList = data;
    });

    // Loading Doctor Data
    this.docService.getAll().subscribe((data: Doctor[]) => {
      this.docList = data;
    });

    // Loading Cabin Data
    this.cabinService.getAll().subscribe((data: Cabin[]) => {
      this.cabinList = data;
    });
  }

  create(): void {
    console.log(this.allotmentForm.value)
    this.cabinAllotmentService.save(this.allotmentForm.value).subscribe(
      
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
        this.patientService.cabinStatusEngaged(this.allotmentForm.value.p_id , this.allotmentForm.value.cabin_status).subscribe(data =>{
         console.log(data , "               data printed from component")
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

  patient_name = '';
  patinetChange(event: any) {
    let value = event.target.value;
    let p_id = parseInt(value);
    for (let i = 0; i < this.patientList.length; i++) {
      if (p_id === this.patientList[i].id) {
        this.patient_name =
          this.patientList[i].p_first_name +
          ' ' +
          this.patientList[i].p_last_name;
      }
    }
    this.allotmentForm.controls['p_name'].setValue(this.patient_name);
    // Another Way to chage the form value like above
    // this.paymentForm.setValue({
    //   ...this.paymentForm.value, p_name: this.patient_name
    //   });
  }


  edit(model: CabinAllotment, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

}
