import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { CabinAllotment } from '../ModelClass/CabinAllotment.model';

@Injectable({
  providedIn: 'root'
})
export class CabinallotmentService implements OnInit,ICommonService<CabinAllotment> {

  constructor(
    private http:HttpClient
  ) { }

  private url:string = "http://localhost:8080/cabinallotment/";


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changeCabinStatus(id:number){
    return this.http.put(this.url + "statuschange/?id="+ id ,id);

  }



  save(data: CabinAllotment) {
    return this.http.post(this.url + "create" , data);
  }
  getAll() {
    return this.http.get<CabinAllotment[]>(this.url + "lists");
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: CabinAllotment) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }

}
