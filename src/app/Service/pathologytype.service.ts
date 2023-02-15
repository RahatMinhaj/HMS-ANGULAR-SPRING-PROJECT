import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { PathologyType } from '../ModelClass/PathologyType.model';

@Injectable({
  providedIn: 'root'
})
export class PathologytypeService implements ICommonService<PathologyType> {

  constructor(
    private http:HttpClient
  ) { }

  private url:string = "http://localhost:8080/pathologytype/";


  save(data: PathologyType) {
    return this.http.post(this.url + "create", data);
  }
  getAll() {
    return this.http.get<PathologyType[]>(this.url + "lists");
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: PathologyType) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
}
