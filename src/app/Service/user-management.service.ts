import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { User } from '../ModelClass/User.model';
import { UserManagementModel } from '../ModelClass/Usermanagement.model';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService implements ICommonService<UserManagementModel> {

  constructor(
    private http:HttpClient
  ) { }


  private url:string = "http://localhost:8080/usermanagement/";

  save(data: UserManagementModel) {
    throw new Error('Method not implemented.');
  }


  getAll() {
    return this.http.get<UserManagementModel[]>(this.url + "getuserlist")
  }


  filterRoles(role:string){
    return this.http.get<UserManagementModel[]>(this.url + "filterrole/" + role)

  }



  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: UserManagementModel) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }






}
