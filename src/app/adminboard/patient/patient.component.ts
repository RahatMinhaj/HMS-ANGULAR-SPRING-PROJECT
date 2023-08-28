import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Patient } from 'src/app/ModelClass/patient.model';
import { PatientService } from 'src/app/Service/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit, ICommonComp<Patient> {
  patientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) { }

  getAll() {
    throw new Error('Method not implemented.');
  }

  create(): void {
    this.patientService.save(this.patientForm.value).subscribe(

      data => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data saved !',
          // text: 'Data Not Found',
          icon: 'success',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        })
        this.router.navigateByUrl("/admin/patientlist")

      },
      error => {
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

  edit(model: Patient, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      id: [''],
      p_first_name: [''],
      p_last_name: [''],
      p_age: ['', [Validators.pattern(/^\d+$/)]],
      p_weight: [''],
      p_gender: [''],
      p_address: [''],
      p_mobile: [''],
      p_platform: [''],
      cabin_status: ['Null'],
      // cabin: {
      //   id:35
      // }
    });
  }
}
