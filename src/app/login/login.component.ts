import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionstorageService } from '../Service/sessionstorage.service';
import { SignupService } from '../Service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 'style.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  isLoggedIn = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private strorageService: SessionstorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      userPassword: [''],
    });

    // For Demo Purpose [Changing input group text on focus]
    $(function () {
      $('input, select').on('focus', function () {
        $(this)
          .parent()
          .find('.input-group-text')
          .css('border-color', '#80bdff');
      });
      $('input, select').on('blur', function () {
        $(this)
          .parent()
          .find('.input-group-text')
          .css('border-color', '#ced4da');
      });
    });
  }

  userData:any;

  checkLogin() {
    this.signupService.checkLoginS(this.loginForm.value).subscribe((data) => {
      // console.log("Your Have got the token :" , data)
      this.strorageService.saveSession(data);
      this.isLoggedIn = true;
      this.userData= this.strorageService.getData();
      let namw: string = this.userData.user.userFirstName;
      console.log(this.userData.user.userFirstName, 'Component=================');
    });
  }
}
