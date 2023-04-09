import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionstorageService } from '../Service/sessionstorage.service';
import { SignupService } from '../Service/signup.service';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

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
    private router: Router,
    private zone: NgZone
  ) {}

  // For Login Checked And Returning the page to home page if loggin is on
  private usedLoginCeck!: any;
  ngOnInit(): void {
    this.usedLoginCeck = this.strorageService.getData();
    if (this.usedLoginCeck != null) {
      this.router.navigateByUrl('/home');
      // window.location.reload();
    }
    // For Login Checked And Returning the page to home page if loggin is on

    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: [''],
    });
  }

  userData: any;

  checkLogin() {
    if (this.loginForm.valid) {
      this.signupService.checkLoginS(this.loginForm.value).subscribe((data) => {
        this.strorageService.saveSession(data);
        this.isLoggedIn = true;
        location.reload();
        // this.router.navigateByUrl('/home');

        // this.zone.run(() => {
        //   this.isLoggedIn = true;
        //   this.router.navigateByUrl("/home")
        // });

        // this.userData= this.strorageService.getData();
        // let userRole = this.userData.jwtToken;
        // console.log(this.userData , " User Roles")
        // console.log(userRole , " User token")
        // // this.router.navigate([""])
        // this.router.navigateByUrl("");
      },
      (error) => {
        Swal.fire(
          'Login Failed!',
          'Sorry Your Username and password is not matched!',
          'error'
        )
      });
    }

    //
    console.log('print check');
  }

  reloadPage(): void {
    window.location.reload();
  }
}
