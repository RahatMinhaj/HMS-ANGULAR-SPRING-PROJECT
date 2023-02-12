import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommonService } from '../Interfaces/ICommonService';
import { MedicineReport } from '../ModelClass/MedicineReport.model';

@Injectable({
  providedIn: 'root'
})
export class MedicinereportService implements ICommonService<MedicinereportService> {

  constructor(
    private http:HttpClient
  ) { }

  private url:string = "http://localhost:8080/medicine_report/";

  save(data: MedicinereportService) {
    return this.http.post(this.url + "create", data)
  }
  getAll() {
    return this.http.get<MedicineReport[]>(this.url + "lists");
  }
  getuserByID(id: number) {
    throw new Error('Method not implemented.');
  }
  updateData(data: MedicinereportService) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
}
