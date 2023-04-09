import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionstorageService } from '../sessionstorage.service';

@Injectable({
  providedIn: 'root',
})
export class CanactivateGuard implements CanActivate {
  constructor(
    private session: SessionstorageService,
    private router:Router
    ) {}

    private islog = this.session.isLoggedIn();
  private userDate = '';



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

  const islog = this.session.isLoggedIn();
  let userDate = '';

  if (islog) {
    userDate = this.session.getRole();
    if (userDate === 'Admin') {
      // alert("This is admin login")
      return true;
    }
  }

  // If the user is not logged in or is not an admin, navigate to the login page and return false
  this.router.navigate(['']);
  return false;
  }
}
