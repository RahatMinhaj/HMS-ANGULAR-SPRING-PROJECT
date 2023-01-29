import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { Patient } from '../ModelClass/Patient.model';





@Injectable({
  providedIn: 'root'
})
export class PatientService implements ICommonService<Patient>{

  constructor( private http:HttpClient) { }

url:string = "http://localhost:8080/patient/";

  save(data: Patient) {
    return this.http.post(this.url + "create", data);
  }




  getAll() {
    throw new Error('Method not implemented.');
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: Patient) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
  

  
}
