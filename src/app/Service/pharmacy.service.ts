import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { Medicine } from '../ModelClass/Medicine.model';
import { Patient } from '../ModelClass/Patient.model';

@Injectable({
  providedIn: 'root'
})



export class PharmacyService implements OnInit,ICommonService<Medicine> {


  url = "http://localhost:8080/medicine/";

  constructor(
    private http:HttpClient

  ) { }


  ngOnInit(): void {

  }


  save(data: Medicine) {
   return this.http.post(this.url+"create",data);
    
  }



  getAll() {
    return this.http.get<Medicine[]>(this.url+"lists");
  }



  getuserByID(id: number) {
    return this.http.get<Medicine>(this.url + "lists/editbyid/" + id)
  }
  updateData(data: Medicine) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
}
