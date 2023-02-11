import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Medicine } from 'src/app/ModelClass/Medicine.model';
import { PatientService } from 'src/app/Service/Patient.service';
import { PharmacyService } from 'src/app/Service/pharmacy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit, ICommonComp<Medicine> {

  medForm!:FormGroup;


  medList!:Medicine[];


  constructor(
    private formBuilder:FormBuilder,
    private pharmaService:PharmacyService,
    private patientServTest:PatientService
  ){}



  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = ['id', 'med_name', 'med_group_name',"med_type","med_weight", "med_description", 'action']
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










  ngOnInit(): void {
    this.medForm = this.formBuilder.group({
      id:[''],
      med_name:[''],
      med_group_name:[''],
      med_type:[''],
      med_weight:[''],
      med_description:[''],
    })

  }


  medicineType(medType:string){

  }










    getAll() {
      this.pharmaService.getAll().subscribe((data: Medicine[]) => {
        this.medList = data;
        // ===========data table properties===============
        this.datasource = new MatTableDataSource<Medicine>(this.medList);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sorting;
      });
    }
    
  
  create(): void {
    this.pharmaService.save(this.medForm.value).subscribe(
      
      data =>{
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data saved !',
          // text: 'Data Not Found',
          icon: 'success',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        })
        this.ngOnInit();

    },
    error =>{
      Swal.fire({
        // title: 'Are you sure !',
        title: 'Data Cannot be saved !',
        text: 'Spring Server Issue',
        icon: 'error',
        // showCancelButton: true,
        // confirmButtonText: 'Yes',
        // cancelButtonText: 'No',
      })  

    })

  
  }
  edit(model: Medicine, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }


}
