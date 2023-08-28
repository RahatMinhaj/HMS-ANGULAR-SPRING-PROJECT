import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Medicine } from 'src/app/ModelClass/Medicine.model';
import { Patient } from 'src/app/ModelClass/patient.model';
import { Prescription } from 'src/app/ModelClass/Prescription.model';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';
import { PatientService } from 'src/app/Service/patient.service';
import { PharmacyService } from 'src/app/Service/pharmacy.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css'],
})
export class PrescriptionComponent
  implements OnInit, ICommonComp<Prescription>
{
  // Patient Information
  patien!: Patient;
  doctor!: Doctor;

  prescForm!: FormGroup;

  // Medicine List
  medList!: Medicine[];

  medListforCash: Medicine[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private docService: DoctorService,
    private medService: PharmacyService
  ) { }

  ngOnInit(): void {
    this.getAll();

    this.prescForm = this.formBuilder.group({
      prescription_id: [],
      doc_id: [''],
      p_id: [''],
      med_name: [''],
      med_group_name: [''],

      morning: [''],
      noon: [''],
      night: [''],
      eatingTime: [''],
      duration: [''],
      weight: [''],
      med_type: [''],
    });
  }

  medObject!: Medicine;
  medSelect(medId: any) {
    let medID = parseInt(medId);
    this.medService.getuserByID(medID).subscribe((data: Medicine) => {
      console.log(data, 'data from getuserID');
      this.medObject = data;
    });
  }

  addMedListtoCash() {
    console.log(this.medObject);
    this.medListforCash.push(this.medObject);
    console.log(this.medListforCash);
    this.ngOnInit();
  }
  removeItemFromPresc(index: number) {
    this.medListforCash.splice(index, 1);
  }

  saveMedicineList() {
    console.log("Method Hit")
    for (let i = 0; i < this.medListforCash.length; i++) {
      this.prescForm = this.formBuilder.group({
        prescription_id: [],
        doc_id: [''],
        p_id: [''],
        med_name: [''],
        med_group_name: [''],

        morning: [''],
        noon: [''],
        night: [''],
        eatingTime: [''],
        duration: [''],
        weight: [''],
        med_type: [''],
      });
      this.prescForm.value.med_name = this.medListforCash[i].med_name;
      this.prescForm.value.med_group_name =
        this.medListforCash[i].med_group_name;
      this.prescForm.value.weight = this.medListforCash[i].med_weight;
      this.prescForm.value.med_type = this.medListforCash[i].med_type;
      console.log(this.prescForm.value, 'value from angular form');
    }
  }

  getAll() {
    // getting Patient Details
    this.patientService.getuserByID(2).subscribe((data: Patient) => {
      this.patien = data;
      console.log(data, 'print from prescription');
    });

    // Getting Doctor Data
    this.docService.getuserByID(2).subscribe((data: Doctor) => {
      this.doctor = data;
      console.log(data, 'print from prescription Doctor');
    });

    // Getting Medicine List
    this.medService.getAll().subscribe((data: Medicine[]) => {
      this.medList = data;
      console.log(data, 'print from prescription Medicine List');
    });
  }
  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: Prescription, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }
}
