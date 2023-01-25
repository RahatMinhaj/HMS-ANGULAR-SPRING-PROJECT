import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Department } from 'src/app/ModelClass/Department.model';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  docDeptForm!: FormGroup;
  deptList!: Department[];
  message!:Observable<string>;




  constructor(
    private formBuilder: FormBuilder,
    private deptService: DepartmentService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.docDeptForm = this.formBuilder.group({
      id:[""],
      dept_name: ['' , Validators.required],
      dept_manager: ['' , Validators.required],
    });

    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
    });


    
    // this method if for data table
    // tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
    // https://datatables.net/examples/index

    $(document).ready(function () {
      $('#table_id').DataTable();
    });
  }


  get deptNameValue(){
    return this.docDeptForm.get('dept_name');
  }
  get userNameval(){
    return this.docDeptForm.get('dept_name');
  }


getuserByID(id : number){

this.deptService.getuserByID(id).subscribe((data:Department) =>{
  this.docDeptForm.patchValue(data);
}
  
)
}




  createDept() {
    if(this.docDeptForm.valid ){
      // console.log(this.docDeptForm.value.dept_name);
      this.deptService.save(this.docDeptForm.value).subscribe((data) => {
        alert("Department Added");
        this.ngOnInit();
      });
    }else{
      alert("Please Fill The Field Properly")
    }
    
  }

  deleteDeptByID(id:number){
    if(confirm("Do You Really want to delete?")){
      alert("deleted!")
      this.deptService.deleteById(id).subscribe(resp =>{
        console.log(resp + "============================resp from angular")
      })
      // console.log("deleted")
      // console.log(this.deptService.deleteById(id))
      
    }else{
      alert("delete Failed")
    }
  }

  openLg(content:any , deptID:number) {
		this.modalService.open(content, {size:'xl'});
    this.getuserByID(deptID);
	}

}
