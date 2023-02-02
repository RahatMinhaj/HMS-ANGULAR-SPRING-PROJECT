import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ICommonService } from 'src/app/Interfaces/ICommonService';
import { Appointment } from 'src/app/ModelClass/Appointment.model';

@Injectable({
  providedIn: 'root'
})


export class AppointmentService implements OnInit,ICommonService<Appointment> {

  url:string = "http://localhost:8080/department";

  constructor(private http:HttpClient) { }









  save(data: Appointment) {
    return this.http.post(this.url, data);
  }

  getAll() {
    throw new Error('Method not implemented.');
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
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
