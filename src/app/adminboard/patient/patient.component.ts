import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
constructor(private formBuilder:FormBuilder){}


  patientForm!:FormGroup;



  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      
    })

  }

  createPatient(){

  }

}
