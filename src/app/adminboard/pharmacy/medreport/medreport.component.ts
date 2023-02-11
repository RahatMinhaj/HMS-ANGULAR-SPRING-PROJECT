import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Medicine } from 'src/app/ModelClass/Medicine.model';
import { MedicineReport } from 'src/app/ModelClass/MedicineReport.model';
import { MedicinereportService } from 'src/app/Service/medicinereport.service';
import { PharmacyService } from 'src/app/Service/pharmacy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medreport',
  templateUrl: './medreport.component.html',
  styleUrls: ['./medreport.component.css']
})
export class MedreportComponent implements OnInit,ICommonComp<MedicineReport> {
  createMedReportForm!:FormGroup;



  medicineList!:Medicine[];
  // supplierList!:S



  constructor(
    private formBuilder:FormBuilder,
    private medicineService:PharmacyService,
    private medicineReportService:MedicinereportService

    ){}


    // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = ['id', 'med_id', 'med_company',"med_quantity","med_courty", "med_manufacture_date","med_expiry_date","supplier_id","med_price", 'action']
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
    this.createMedReportForm = this.formBuilder.group({
      id:[''],
      med_id:[''],
      med_company:[''],
      med_quantity:[''],
      med_courty:[''],
      med_manufacture_date:[''],
      med_expiry_date:[''],
      supplier_id:[''],
      med_price:['']
    })




    // For Getting medicine LIst
    this.medicineService.getAll().subscribe((data:Medicine[]) =>{
      this.medicineList = data;
    })

  }

  onChangeMedicine(MedID:any){

  }



 
  getAll() {
    throw new Error('Method not implemented.');
  }




  create(): void {
    this.medicineReportService.save(this.createMedReportForm.value).subscribe(
      
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

  })
}
  
  edit(model: MedicineReport, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

}
