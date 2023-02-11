import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { User } from '../ModelClass/User.model';


const url:string = "http://localhost:8090/auth";


@Injectable({
  providedIn: 'root'
})


export class SignupService implements ICommonService<User> {





  constructor(
    private http:HttpClient,
    
  ) { }
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

   return this.http.post(url+"/registration",data);
  }

  checkLoginS(data:User){
    return this.http.post("http://localhost:8090/auth/login",data);
  }

}
