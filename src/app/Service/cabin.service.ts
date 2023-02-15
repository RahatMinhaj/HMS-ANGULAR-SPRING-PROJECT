import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { Cabin } from '../ModelClass/Cabin.model';

@Injectable({
  providedIn: 'root'
})
export class CabinService implements ICommonService<Cabin>{

  private url:string = "http://localhost:8080/cabin/";

  constructor(
    private http:HttpClient
  ) { }


  save(data: Cabin) {
    return this.http.post(this.url + "create" , data)
  }
  getAll() {
    return this.http.get<Cabin[]>(this.url + "lists");
  }
  getuserByID(id: number) {
    return this.http.get<Cabin>(this.url + "lists/editbyid/" + id);
  }
  updateData(data: Cabin) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
}
