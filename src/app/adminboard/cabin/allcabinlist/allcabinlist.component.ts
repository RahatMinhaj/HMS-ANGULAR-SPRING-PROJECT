import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Cabin } from 'src/app/ModelClass/Cabin.model';
import { CabinAllotment } from 'src/app/ModelClass/CabinAllotment.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { CabinallotmentService } from 'src/app/Service/cabinallotment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allcabinlist',
  templateUrl: './allcabinlist.component.html',
  styleUrls: ['./allcabinlist.component.css']
})
export class AllcabinlistComponent implements OnInit,ICommonComp<CabinAllotment>{
  cabinAllotMentList!: CabinAllotment[];

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


  changeCabinStaus(cabinAllotment:CabinAllotment){
    if(cabinAllotment.cabin_status == "Engaged"){
      Swal.fire({
        // title: 'You Want to release the patient?',
        text: 'You Want to release the patient?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ok',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          this.cabinAllotmentService.changeCabinStatus(cabinAllotment.id).subscribe((data) =>{
            console.log("data gained " + data)
            this.ngOnInit();
          })   
          Swal.fire('Discharged!', 'Patient has been discharged!', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire('Cancelled', 'Product still in our database.', 'error');
        }





        
      });


    }else{
      Swal.fire({
        // title: 'Are you sure !',
        text: 'Already Discharged!',
        icon: 'info',
        // showCancelButton: true,
        confirmButtonText: 'ok',
        cancelButtonText: 'No',
      })
    }

  }

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
    this.cabinAllotmentService.getAll().subscribe((data:CabinAllotment[])=>{
      this.cabinAllotMentList = data;

      // console.log(this.cabinAllotMentList , "=============================")
      // ===========data table properties===============
      this.datasource = new MatTableDataSource<CabinAllotment>(this.cabinAllotMentList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    })
  }



  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: CabinAllotment, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }




}
