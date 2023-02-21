import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { Pathology } from '../ModelClass/Pathology.model';

@Injectable({
  providedIn: 'root'
})
export class PathologyService implements ICommonService<Pathology>{

  constructor(
    private http:HttpClient
  ) { }



  private url:string = "http://localhost:8080/pathology/";


  save(data: Pathology) {
    console.log(data.patient_id)
    return this.http.post(this.url + "create", data);
  }

  getAll() {
    return this.http.get<Pathology[]>(this.url + "lists");
  }

  getDataByUserID(id:number){
return this.http.get<Pathology[]>(this.url + "diagonosticlist/" + id);
  }


  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: Pathology) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
}
