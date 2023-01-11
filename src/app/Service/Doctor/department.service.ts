import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from 'src/app/ModelClass/Department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:3000/department"

  save(data: Department){
    return this.http.post(this.url, data);
    
  }

  getAll(){
  return this.http.get<Department[]>(this.url);
  }
}
