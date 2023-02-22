import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Employee } from 'src/app/ModelClass/Employee.mode';
import { Pathology } from 'src/app/ModelClass/Pathology.model';
import { PathologyType } from 'src/app/ModelClass/PathologyType.model';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';
import { PathologyService } from 'src/app/Service/pathology.service';
import { PathologytypeService } from 'src/app/Service/pathologytype.service';
import { PatientService } from 'src/app/Service/Patient.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css'],
})
export class PathologyComponent implements OnInit, ICommonComp<Pathology> {
  pathologyForm!: FormGroup;
  pathologyList!: Pathology[];

  patientList!: Patient[];
  emp_id_pathologist!: Employee[]; //need to custom query for filtering only pathologist
  docList!: Doctor[];
  pathologyTypeList!: PathologyType[];

  constructor(
    private formBuilder: FormBuilder,
    private pathologyService: PathologyService,
    private patientService: PatientService,
    private docService: DoctorService,
    private pathologyTypeService: PathologytypeService
  ) {}


 


  ngOnInit(): void {
    this.pathologyForm = this.formBuilder.group({
      id: [],
      p_name: [''], //should be from employee table where pathologist will be there
      doc_id: [], //doct reference id
      pathology_type_id: [],
      pathology_price: [],
      pathology_desc: [''],
      createdAt: [],


      patient_id: [],
      patient:[]
    });

    this.getAll();
  }

  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'id',
    'patient_id',
    'p_name',
    'doc_id',
    'pathology_type_id',
    'createdAt',
    'pathology_price',
    'pathology_desc',
    'action',
  ];
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

  patient_name = '';
  patientChange(event:any){
    let value = event.target.value;
    let p_id = parseInt(value);

    for (let i = 0; i < this.patientList.length; i++) {
      if (p_id === this.patientList[i].id) {
        this.patient_name =
          this.patientList[i].p_first_name +
          ' ' +
          this.patientList[i].p_last_name;
      }
    }
    this.pathologyForm.controls['p_name'].setValue(this.patient_name);

  }

  pathologyPrice:number = 0;
  changePathologyType(event:any){
    let value = event.target.value;
    let pathologyTypeid = parseInt(value);
    for (let i = 0; i < this.pathologyTypeList.length; i++) {
      if (pathologyTypeid === this.pathologyTypeList[i].id) {
        this.pathologyPrice = this.pathologyTypeList[i].pathology_price;
      }
    }
    this.pathologyForm.controls['pathology_price'].setValue(this.pathologyPrice);

  }





  getAll() {
    this.pathologyService.getAll().subscribe((data: Pathology[]) => {
      this.pathologyList = data;
      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Pathology>(this.pathologyList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });

    this.patientService.getAll().subscribe((data: Patient[]) => {
      this.patientList = data;
    });

    this.docService.getAll().subscribe((data: Doctor[]) => {
      this.docList = data;
    });

    this.pathologyTypeService.getAll().subscribe((data: PathologyType[]) => {
      this.pathologyTypeList = data;
    });
  }
  create(): void {

    this.pathologyForm.value.patient = {
      id:this.pathologyForm.value.patient_id

    }



    this.pathologyService.save(this.pathologyForm.value).subscribe(
      (data) => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data saved !',
          // text: 'Data Not Found',
          icon: 'success',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        });
        this.ngOnInit();
      },
      (error) => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data Cannot be saved !',
          text: 'Spring Server Issue',
          icon: 'error',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        });
      }
    );
  }
  edit(model: Pathology, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }
}
