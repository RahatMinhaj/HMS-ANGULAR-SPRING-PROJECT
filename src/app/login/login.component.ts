import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionstorageService } from '../Service/sessionstorage.service';
import { SignupService } from '../Service/signup.service';
import { BehaviorSubject } from 'rxjs';

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
    private strorageService: SessionstorageService,
    private router:Router,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
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
      this.zone.run(() => {
        this.isLoggedIn = true;
        this.router.navigate(['/']);
        this.reloadPage()
      });
      
      // this.userData= this.strorageService.getData();
      // let userRole = this.userData.jwtToken;  
      // console.log(this.userData , " User Roles")
      // console.log(userRole , " User token")
      // // this.router.navigate([""])
      // this.router.navigateByUrl("");
    });


  }
  reloadPage(): void {
    window.location.reload();
  }

}
