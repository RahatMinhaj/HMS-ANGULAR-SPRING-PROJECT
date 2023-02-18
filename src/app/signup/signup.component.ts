import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { ICommonComp } from '../Interfaces/ICommonComp';
import {  User } from '../ModelClass/User.model';
import { SignupService } from '../Service/signup.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})







export class SignupComponent implements OnInit,ICommonComp<User> {

  signupForm!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private signupService:SignupService,
    private router:Router,
    private http:HttpClient
    ){}
  

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      userName:[
        '', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]],
      userFirstName:['', Validators.required],
      userLastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
      confirmPassword:['',Validators.required],
      userDOB:[''],
      userLoc:[''],
    }, { validator: this.matchPassword('password', 'confirmPassword') }
    
    )

    
  }




  matchPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
  
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
  
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };


  }

  resetFields(){
    this.ngOnInit();
  }










  get userNameVal() {
    return this.signupForm.get('userName');
  }
  get userFirstName() {
    return this.signupForm.get('userFirstName');
  }
  get userLastName() {
    return this.signupForm.get('userLastName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }


  create(): void {
    if(this.signupForm.valid){
      this.signupService.save(this.signupForm.value).subscribe(data =>{
        
        Swal.fire({
          title: 'Signup Successful!!',
          text: 'Please Login Now',
          icon: 'success',
          cancelButtonText: 'ok',

        })
        window.location.reload()
        this.router.navigateByUrl("/login")
        

      },error=>{
        Swal.fire({
          title: 'Signup Failed!',
          text: 'Registration failed due to server issue!',
          icon: 'error',
          cancelButtonText: 'ok',

        })
      }
      
      
      )
     
    }else{
      Swal.fire({
        title: 'Validation Error !',
        text: 'Please Validate the Form First',
        icon: 'error',
        cancelButtonText: 'ok',
      })
    }
    
  }






  getAll() {
    throw new Error('Method not implemented.');
  }
  edit(model: User, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }




 
}
