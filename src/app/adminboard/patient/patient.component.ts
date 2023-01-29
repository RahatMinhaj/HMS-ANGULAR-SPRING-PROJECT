import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { PatientService } from 'src/app/Service/Patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit, ICommonComp<Patient> {
  patientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService
  ) {}

  getAll() {
    throw new Error('Method not implemented.');
  }

  create(): void {
    this.patientService.save(this.patientForm.value).subscribe((data) => {
      console.log(data);
      alert('Patient Added!');
    });
    
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
      p_age: [''],
      p_weight: [''],
      p_gender: [''],
      p_address: [''],
      p_mobile: [''],
      p_platform: [''],
    });
  }
}
