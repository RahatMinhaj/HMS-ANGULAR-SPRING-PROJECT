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


  cabinStatusEngaged(patientID:number, status:string){
    return this.http.get(this.url +"updatecabin/?pid=" + patientID + "&status=" + status);

  }



  getAll() {
    return this.http.get<Patient[]>(this.url + "lists");

  }
  getuserByID(id: number) {
    return this.http.get<Patient>(this.url + "lists/editbyid/" + id)
  }
  updateData(data: Patient) {
    return this.http.put(this.url +"lists/update/" + data.id, data );
  }
  deleteById(id: number) {
    return this.http.delete(this.url + "lists/delete/" + id);
  }
  

  
}
