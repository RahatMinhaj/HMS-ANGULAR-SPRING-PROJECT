import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Department } from 'src/app/ModelClass/Department.model';
import { AppointmentService } from 'src/app/Service/appointment.service';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';
import * as $ from 'jquery';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
// export class DepartmentComponent implements OnInit, AfterViewInit {
export class DepartmentComponent implements OnInit{
  docDeptForm!: FormGroup;
  deptList!: Department[];
  message!: Observable<string>;

  deptModel!: Department;



  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = ['id', 'dept_name', 'dept_manager', 'action']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue;
    // this.deptList.sort = 
    // this.deptList.filter = filterValue.trim().toLowerCase();
    // if (this.deptList.paginator) {
    //   this.deptList.paginator.firstPage();
    // }
    // }
  }


  constructor(
    private formBuilder: FormBuilder,
    private deptService: DepartmentService,

    // Service For Modal
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

      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Department>(this.deptList)
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });


  }

  // ngAfterViewInit(): void {
  //    // this method if for data table
  //   // tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
  //   // https://datatables.net/examples/index
  //   // $(document).ready(function () {
  //   //   $('#table_id').DataTable({
  //   //     destroy: true
  //   //   });

  //   // });
  // }


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





  // ================================edit method:end================================

  closeResult!: string;
  editDept(content: any, dept: Department) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
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


  updateData() {
    this.deptService.updateData(this.docDeptForm.value).subscribe((data) => {
      alert("Department Updated!");
      this.ngOnInit();
      this.modalService.dismissAll();
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



  deleteDeptByID(id: number) {
    if (confirm("Do You Really want to delete?")) {
      alert("deleted!")
      this.ngOnInit();
      this.deptService.deleteById(id).subscribe(resp => {
        console.log(resp + "============================resp from angular")
        this.ngOnInit();
      })
    } else {
      alert("delete Failed")
    }
  }




}
