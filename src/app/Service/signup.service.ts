import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { User } from '../ModelClass/User.model';


const url:string = "http://localhost:8080/";


@Injectable({
  providedIn: 'root'
})


export class SignupService implements ICommonService<User>,OnInit {





  constructor(
    private http:HttpClient,

    
  ) { }



  ngOnInit(): void {
    // this.getIp();
  }


  // getIp(){
  //   let ipads = '';
  //   return this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
  //     ipads = res.ip;
  //     return ipads;
  //   });
  // }



  getAll() {
    throw new Error('Method not implemented.');
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: User) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }




  save(data: User) {
    console.log(data.password , " from service")

   return this.http.post(url+"registration",data);
  }

  checkLoginS(data:User){
    return this.http.post(url + "api/auth/login",data);

  }

}
