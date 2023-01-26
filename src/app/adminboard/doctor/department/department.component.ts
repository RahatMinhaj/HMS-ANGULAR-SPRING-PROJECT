import { AfterViewInit, Component, OnInit } from '@angular/core';
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
export class DepartmentComponent implements OnInit,AfterViewInit {
  docDeptForm!: FormGroup;
  deptList!: Department[];
  message!: Observable<string>;

  deptModel!: Department;

  displayedColumns:string[] = ['id','dept_name','dept_manager']



  constructor(
    private formBuilder: FormBuilder,
    private deptService: DepartmentService,
    private modalService: NgbModal
  ) { }





  ngOnInit() {
    this.docDeptForm = this.formBuilder.group({
      id: [""],
      dept_name: ['', Validators.required],
      dept_manager: ['', Validators.required],
    });

    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
    });

   
  }

  ngAfterViewInit(): void {
     // this method if for data table
    // tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
    // https://datatables.net/examples/index
    $(document).ready(function () {
      $('#table_id').DataTable({
        destroy: true
      });
      
    });
  }


  get deptNameValue() {
    return this.docDeptForm.get('dept_name');
  }
  get userNameval() {
    return this.docDeptForm.get('dept_name');
  }






  createDept() {
    if (this.docDeptForm.valid) {
      // console.log(this.docDeptForm.value.dept_name);
      this.deptService.save(this.docDeptForm.value).subscribe((data) => {
        alert("Department Added");
        this.ngOnInit();
      });
    } else {
      alert("Please Fill The Field Properly")
    }

  }

  deleteDeptByID(id: number) {
    if (confirm("Do You Really want to delete?")) {
      alert("deleted!")
      this.deptService.deleteById(id).subscribe(resp => {
        console.log(resp + "============================resp from angular")
      })
      // console.log("deleted")
      // console.log(this.deptService.deleteById(id))

    } else {
      alert("delete Failed")
    }
  }

  closeResult!:string;


    // ================================edit method:end================================

  EditDept(content: any, dept: Department) {

    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
      this.ngOnInit();
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.ngOnInit();
      this.closeResult = `Dismissed `;
    });

    this.deptService.getuserByID(dept.id).subscribe((data: Department) => {
      // console.log(data + "         ====================data comes from back" + data.dept_name);
      this.deptModel = data;
      this.docDeptForm.patchValue(this.deptModel);
      // console.log(data.dept_manager + "=========-------------------------- test")
    })
  }

  updateData(){
    this.deptService.updateData(this.docDeptForm.value).subscribe((data) => {
      alert("Department Added");
      this.ngOnInit();
    });
    // console.log("update meth called")

  }



// -------Unused Edit method------
    // getuserByID(dept: Department) {

  //   // this.deptService.getuserByID(dept.id).subscribe((data:Department) =>{
  //   //   console.log(data + "         ====================data comes from back");
  //   //   this.deptModel = data;
  //   //   this.docDeptForm.patchValue(this.docDeptForm);
  //   // }

  //   // )
  // }

  // ================================edit method:end================================























  


}
