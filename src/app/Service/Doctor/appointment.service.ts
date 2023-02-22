import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ICommonService } from 'src/app/Interfaces/ICommonService';
import { Appointment } from 'src/app/ModelClass/Appointment.model';

@Injectable({
  providedIn: 'root'
})


export class AppointmentService implements OnInit,ICommonService<Appointment> {

  url:string = "http://localhost:8080/appointment/";

  constructor(private http:HttpClient) { }




 updateTableVals(data:Appointment){
    return this.http.put(this.url + "data/update/" + data.id, data );
  }


  updateAllDataById(ids:number[], status: string) {
    return this.http.get<number[]>(this.url + "data/updateAll?ids="+ids+"&status="+status);
  }




  save(data: Appointment) {
    return this.http.post(this.url + "create",  data);
  }

  getAll() {
    return this.http.get<Appointment[]>(this.url + "lists");
  }

  getAppointmentListByUserName(userName:string){

    return this.http.get<Appointment[]>(this.url + userName + "/lists");
  }




  getAllListByAppointType(type:string){
return this.http.get<Appointment[]>(this.url + "lists/" + type)
  }





  getuserByID(id: number) {
    return this.http.get<Appointment>(this.url + "lists/editbyid/" + id)
  }
  updateData(data: Appointment) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
