import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { Payment } from '../ModelClass/Payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService implements ICommonService<Payment> {

  constructor(
    private http:HttpClient
  ) { }

  url= "http://localhost:8080/payment/"


  save(data: Payment) {
    return this.http.post(this.url+"create" , data)
  }



  getAll() {
    return this.http.get<Payment[]>(this.url+ "lists");
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: Payment) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
}
