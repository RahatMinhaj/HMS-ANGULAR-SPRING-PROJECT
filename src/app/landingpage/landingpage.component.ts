import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HardCodeauthService } from '../Service/hard-codeauth.service';
import { PatientService } from '../Service/Patient.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
  userLoginForm!:FormGroup;
  userSignUpform!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
     private patientService:PatientService, 
     public hardcoderAuth:HardCodeauthService,
     private modalService:NgbModal,
     
     ) {}

  isUserLoggedIN : boolean = false;    




  ngOnInit(): void {

this.isUserLoggedIN = this.hardcoderAuth.isUserLoggedIn();


// user Login Form
this.userLoginForm = this.formBuilder.group({
  username:['us'],
  password:['us']


})


    // user Sign UP Form
    this.userSignUpform = this.formBuilder.group({
      p_first_name: ['Hello Work'],
      p_last_name: [''],
      p_email: [''],
      p_password: [''],
      p_pass_confirm: [''],
      p_age: [''],
      p_weight: [''],
      p_height: [''],
      p_gender: [''],
      p_mobile:[''],
      p_address: [''],
    });
  }

  registration(){
    console.log(this.userSignUpform.value.p_first_name)
    // this.patientService.saveData(this.userSignUpform.value)
  }
  
  userLogin(){
    // console.log(this.userLoginForm.value.username);
    this.hardcoderAuth.authenticate(this.userLoginForm.value.username, this.userLoginForm.value.password);
    
    }


    ShowAppointmentForm(modal?: any): void {
      this.modalService.open(modal, { size: 'xl' }).result.then(
        (result) => {
          this.ngOnInit();
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.ngOnInit();
          // this.closeResult = `Dismissed `;
        }
      );
      
    }



    

    
  }


