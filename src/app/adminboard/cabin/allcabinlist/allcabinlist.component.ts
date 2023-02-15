import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Cabin } from 'src/app/ModelClass/Cabin.model';
import { CabingAllotment } from 'src/app/ModelClass/CabinAllotment.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { CabinallotmentService } from 'src/app/Service/cabinallotment.service';

@Component({
  selector: 'app-allcabinlist',
  templateUrl: './allcabinlist.component.html',
  styleUrls: ['./allcabinlist.component.css']
})
export class AllcabinlistComponent implements OnInit,ICommonComp<CabingAllotment>{
  cabinAllotMentList!: CabingAllotment[];

// patient list
plist!:Patient[];
cabinList!:Cabin[];
docList!:Doctor[];


  constructor(

    private cabinAllotmentService: CabinallotmentService,
    // private ngModal: NgbModal

  ) { }



  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'id',
    'p_id',
    'cabin_id',
    'doc_id',
    'allotment_date',
    'discharge_date',
    'cabin_status',
    'action'
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

  // ==============Table Properties===========

  ngOnInit() {
    this.getAll();

  }




  filterCabinStatus(value : any){

  }






  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: CabingAllotment, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }




}
