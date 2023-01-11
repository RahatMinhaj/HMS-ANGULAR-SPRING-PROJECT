import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodeauthService {

  constructor() { }

  authenticate(user:string, password:string){
    if(user == "a" && password == "b"){
     
      sessionStorage.setItem("user" , user);
      return true;
    }
return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem("user");
    return !(user== null)
  }
}
