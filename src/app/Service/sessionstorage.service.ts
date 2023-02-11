import { Injectable } from '@angular/core';


const userKey = "auth-user";



@Injectable({
  providedIn: 'root'
})
export class SessionstorageService {

  constructor() { }



  saveSession(userData:any){
    window.localStorage.removeItem(userKey)
    window.localStorage.setItem(userKey,JSON.stringify(userData));

  }

  getData(){
    const user = window.localStorage.getItem(userKey)
    return JSON.parse(user!);
  }


  isLoggedIn(){
    if(localStorage.getItem(userKey)){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    window.localStorage.removeItem(userKey);
    window.localStorage.clear();
  }

}
