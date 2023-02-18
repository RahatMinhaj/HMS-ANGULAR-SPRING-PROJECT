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

  private userDate = this.session.getRole();
 

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if(this.userDate == "ROLE_ADMIN"){
        alert("This is admin login")
        return true;
      }else{
        alert("This is not admin login")
        return false;
      }   
  }
}
