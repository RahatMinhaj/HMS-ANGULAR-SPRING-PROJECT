import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Department } from 'src/app/ModelClass/Department.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit,ICommonComp<Doctor> {
  editDocForm!:FormGroup;
  deptList!: Department[];
  docModel!:Doctor;


  docList!:Doctor[];




  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'mobile','Department','specialization', 'details','visit_charge', 'doc_join_date','action']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;





  constructor(
    private docService:DoctorService,
    private deptService:DepartmentService,
    private formBuilder:FormBuilder,
    private modalService:NgbModal
    ) { }











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









  getAll() {
    this.docService.getAll().subscribe((data: Doctor[]) => {
      this.docList = data;
      console.log(data)

      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Doctor>(this.docList)
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });
     
  }





  create(): void {
    throw new Error('Method not implemented.');
  }



  closeResult!: string;
  edit(model: Doctor, modal?: any): void {
    this.modalService.open(modal, { size: 'xl' }).result.then((result) => {
      this.ngOnInit();
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.ngOnInit();
      this.closeResult = `Dismissed `;
    });

    this.docService.getuserByID(model.id).subscribe((data: Doctor) => {
      // console.log(data + "         ====================data comes from back" + data.dept_name);
      this.docModel = data;
      this.editDocForm.patchValue(this.docModel);
      // console.log(data.dept_manager + "=========-------------------------- test")
    })
  }





  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {

    this.editDocForm = this.formBuilder.group({
      id: [""],
      first_name: [''],
      last_name: [''],
      mobile: [''],
      dept_id: [''],
      degree: [''],
      specialization: [''],
      details: [''],
      visit_charge: [''],
      doc_join_date: [''],
      picture:['']

    })
   






    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
    });

    this.getAll();
  }

}
