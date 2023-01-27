import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/ModelClass/Department.model';

@Injectable({
  providedIn: 'root'
})



export class DepartmentService implements OnInit {



  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
  };



  ngOnInit(): void {

  }



  // url:string = "http://localhost:3000/department"
  url:string = "http://localhost:8080/department"

  save(data: Department){
    return this.http.post(this.url + "/create", data);
    
  }

  getAll(){
  return this.http.get<Department[]>(this.url  + "/lists");
  }

  deleteById(id : number){
    return this.http.delete(this.url + "/lists/delete/"+id);
  }


// ================================edit method:start================================

  getuserByID (id : number): Observable<any>{
    // console.log(this.http.get<Department>(this.url + "/lists/edit/" + id));
    console.log("user id : ===============" + id)

// return this.http.get<Department>(this.url + "/lists/editbyid/{id}" + id);
return this.http.get<Department>(this.url + "/lists/editbyid/" + id);
// return this.http.get<Department>(this.url + "/lists/editbyid/" + id);
  }

  updateData(department:Department){
    // console.log(department.id + "======================================id " + department.dept_name)
    return this.http.put(this.url+ "/lists/update/"+ department.id , department);
    // console.log("medod work")

  }
  // ================================edit method:end================================

}
