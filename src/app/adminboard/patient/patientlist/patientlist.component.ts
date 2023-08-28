import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Patient } from 'src/app/ModelClass/patient.model';
import { PatientService } from 'src/app/Service/patient.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css'],
})
export class PatientlistComponent implements OnInit, ICommonComp<Patient> {
  editPForm!: FormGroup;
  pList: Patient[] = [];
  pModel!: Patient;
  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'id',
    'p_first_name',
    'p_last_name',
    'p_age',
    'p_weight',
    'p_gender',
    'p_mobile',
    'p_address',
    'p_platform',
    'cabin_id',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue;
  }

  constructor(
    private pService: PatientService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  // public get totalRows(): number {
  //   return this.pList.length;
  // }


  getCabin(post: Patient) {
    if (post.cabin !== null) {
      return 22
    }

    return 0;
  }


  getAll() {
    this.pService.getAll().subscribe((data: Patient[]) => {
      this.pList = data;
      const test = data;


      // for (let index = 0; index < this.pList.length; index++) {

      //   if(this.pList[index].cabin.id !== null){
      //     this.Cabin_id = this.pList[index].cabin.id.toString();
      //   }else{
      //     this.Cabin_id = "null";
      //   }

      // }



      console.log(this.pList[0].cabin, "-*******************************************");
      // console.log(test.cabin.id , "-*******************************************");

      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Patient>(this.pList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });
  }

  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: Patient, modal?: any): void {
    this.modalService.open(modal, { size: 'xl' }).result.then(
      (result) => {
        this.ngOnInit();
        // this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.ngOnInit();
        // this.closeResult = `Dismissed `;
      }
    );

    this.pService.getuserByID(model.id).subscribe((data: Patient) => {
      console.log(data + "         ====================data comes from back" + data.p_first_name);
      this.pModel = data;
      this.editPForm.patchValue(this.pModel);
      // console.log(data.dept_manager + "=========-------------------------- test")
    });
  }

  updateData() {
    this.pService.updateData(this.editPForm.value).subscribe((data) => {
      alert('Department Updated!');
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }

  cancelModal() {
    this.modalService.dismissAll();
  }




  deleteByID(id: number): void {
    this.pService.deleteById(id).subscribe((data: any) => {
      this.ngOnInit();
      return data.delMessage;
    });
  }

  deleteAlert(id: number) {
    Swal.fire({
      title: 'Are you sure !',
      text: 'You want to Delete this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.deleteByID(id);
        Swal.fire('Your Item is', 'removed', 'error');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire('Cancelled');
      }
    });
  }











  ngOnInit(): void {
    this.editPForm = this.formBuilder.group({
      id: [''],
      p_first_name: [''],
      p_last_name: [''],
      p_age: [''],
      p_weight: [''],
      p_gender: [''],
      p_address: [''],
      p_mobile: [''],
      p_platform: [''],
    });

    this.getAll();
  }
}
