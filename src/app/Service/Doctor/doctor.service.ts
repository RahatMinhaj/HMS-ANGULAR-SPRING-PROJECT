import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from 'src/app/Interfaces/ICommonService';
import { Doctor } from 'src/app/ModelClass/Doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService implements ICommonService<Doctor> {

  url:string = "http://localhost:8080/doctor/";

  constructor(
    private http:HttpClient,

  ) { }


  save(data: Doctor) {
    // console.log("printed from doc service" + data.first_name)
        return this.http.post(this.url + "create", data);
  }



  getAll() {
    return this.http.get<Doctor[]>(this.url + "lists")
  }



  getuserByID(id: number) {
    return this.http.get<Doctor>(this.url + "lists/editbyid/" + id)
  }



  updateData(data: Doctor) {
    return this.http.put(this.url +"lists/update/" + data.id, data )
  }



  deleteById(id: number) {
    return this.http.delete(this.url + "lists/delete/" + id);
  }









}
