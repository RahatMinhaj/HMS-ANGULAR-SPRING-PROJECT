import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit,ICommonComp<Doctor> {
docList!:Doctor[];
  // ==============Table Properties===========
  daata: any;
  displayedColumns: string[] = ['id', 'dept_name', 'dept_manager', 'action']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;





  constructor(private docService:DoctorService) { }











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
     
  }





  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: Doctor, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.docService.getAll().subscribe((data: Doctor[]) => {
      this.docList = data;
      console.log(data)

      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Doctor>(this.docList)
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });









    this.getAll();
  }

}
