import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../ModelClass/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private http:HttpClient) { }

  url:string = "localhost:8080";

  saveData(data:Patient){
    console.log(data.p_first_name);
    return this.http.post(this.url,data).toPromise();
    

  }
}
