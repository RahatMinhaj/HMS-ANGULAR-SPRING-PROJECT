import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { Supplier } from '../ModelClass/Supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService implements ICommonService<Supplier> {

  constructor(
    private http:HttpClient

  ) { }

 private url:string = "http://localhost:8080/supplier/";

  save(data: Supplier) {
    return this.http.post(this.url + "create", data)
  }

  getAll() {
    return this.http.get<Supplier[]>(this.url + "lists");
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: Supplier) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
}
