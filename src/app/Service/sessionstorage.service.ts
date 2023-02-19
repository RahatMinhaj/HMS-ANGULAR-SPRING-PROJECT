import { Injectable } from '@angular/core';


const userKey = "auth-user";



@Injectable({
  providedIn: 'root'
})
export class SessionstorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  saveSession(userData:any){
    window.localStorage.removeItem(userKey)
    window.localStorage.setItem(userKey,JSON.stringify(userData));

    // window.location.reload();

  }

  getData(){
    const user = window.localStorage.getItem(userKey)
    return JSON.parse(user!);
  }

  getRole(){
    let role = this.getData().user.role[0].roleName;
    return role;
  }



  getToken(){
    const userToken = this.getData().jwtToken;
    return userToken
  }



  isLoggedIn(){
    if(localStorage.getItem(userKey)){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    // window.localStorage.removeItem(userKey);
    window.localStorage.clear();
    window.location.reload();
  }

}
