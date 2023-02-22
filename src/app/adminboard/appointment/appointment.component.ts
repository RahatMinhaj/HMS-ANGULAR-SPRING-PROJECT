import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Appointment } from 'src/app/ModelClass/Appointment.model';
import { Department } from 'src/app/ModelClass/Department.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { AppointmentService } from 'src/app/Service/Doctor/appointment.service';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';
import { DepartmentComponent } from '../doctor/department/department.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit, ICommonComp<Appointment> {
  aptList!: Appointment[];

  appointmentModel!: Appointment;
  editAppointForm!: FormGroup;
  deptList!: Department[];
  docByDepartment!: Doctor[];

  constructor(

    private appointService: AppointmentService,
    private ngModal: NgbModal

  ) { }

  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'select',
    'id',
    'apStatus',
    'apSerial',
    'p_type',
    'p_id',
    'apFirstName',
    'apLastName',
    'apMobile',
    'dept_id',
    'doc_id',
    'apLocation',
    'apGender',
    'apAge',
    'apDeseaseDetails',
    'emp_id',
    'apDate',
    'apEntryDate',
    'appointmentuserName',
    'action'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  // ==============Table Properties===========

  ngOnInit() {
    this.getAll();

    // this.deptComp.getDeptList();

  }

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






  upTableVal(model: Appointment) {
    console.log(model.id + " ======================")
    this.appointService.updateTableVals(model).subscribe(data => {
      console.log("data get =======" + data)
      this.ngOnInit();
    });

  }

  selectedStatus = '';
  statusChange(status:string){

    this.selectedStatus = status;
    console.log(status  + "========================status")
    if(this.selectedStatus == ''){
    console.log("Do nothing")
    this.ngOnInit();
    }else if (this.selectedStatus == 'mkPending') {
      this.changeStatusFromCheckbox("Pending");
      this.ngOnInit();
      // console.log('all aapointment');
    } else if (this.selectedStatus == 'mkConfirm') {
      this.changeStatusFromCheckbox("Confirmed");
      this.ngOnInit();
      // console.log('pending aapointment');
    }

  }




  changeStatusFromCheckbox(status:string){

    console.log("button vlicked..", )
    this.appointService.updateAllDataById(this.selectedIds,status).subscribe(data => {
      console.log(data)
      this.ngOnInit();
    }
    )
  }




  statusSelectionBox:boolean = false;
  selectedIds:number[] = [];
  selectedRows:Appointment[] = [];
  tableCheckbox(row:number, checked:any) {
    console.log("Selected row---", row)
    if (checked) {
      this.selectedIds.push(row);
      this.statusSelectionBox = true;
      console.log("row checked ")

    } else {

      this.selectedIds = this.selectedIds.filter(item => {
        item !== row
        // this.statusSelectionBox = false;
      
      });
      console.log("row unchecked")
      
    }

  // selectedRows:Appointment[] = [];
  // tableCheckbox(row:Appointment, checked:any) {
  //   console.log("Selected row---", row)
  //   if (checked) {
  //     this.selectedRows.push(row);
  //     console.log("row checked ")

  //   } else {

  //     this.selectedRows = this.selectedRows.filter(item => item.id !== row.id);
  //     console.log("row unchecked")
  //   }

    console.log("Selected row count",  this.selectedIds.length)

    // for (let i = 0; i < this.selectedRows.length; i++) {
    //   console.log(this.selectedRows[i])
    // }

  }


















  getAll() {
    this.appointService.getAll().subscribe((data: Appointment[]) => {
      this.aptList = data;
      // console.log(data);

      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Appointment>(this.aptList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });
  }
  create(): void {
    throw new Error('Method not implemented.');
  }




  closeResult!: string;
  edit(model: Appointment, modal?: any): void {

    this.ngModal.open(modal, { size: 'xl' }).result.then(
      (result) => {
        this.ngOnInit();
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.ngOnInit();
        this.closeResult = `Dismissed `;
      }
    );

    this.appointService.getuserByID(model.id).subscribe((data: Appointment) => {
      // console.log(data + "         ====================data comes from back" + data.dept_name);
      this.appointmentModel = data;
      this.editAppointForm.patchValue(this.appointmentModel);
      // console.log(data.dept_manager + "=========-------------------------- test")
    });
  }



  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  appointType(type: string) {
    this.appointService
      .getAllListByAppointType(type)
      .subscribe((data: Appointment[]) => {
        this.aptList = data;
        console.log(data);
        // this.ngOnInit();

        // ===========data table properties===============
        this.datasource = new MatTableDataSource<Appointment>(this.aptList);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sorting;
      });
  }

  selectedTeam = '';
  onSelect(value: string) {
    this.selectedTeam = value;
    if (this.selectedTeam == 'all') {
      this.getAll();
      // console.log('all aapointment');
    } else if (this.selectedTeam == 'pending') {
      this.appointType('Pending');
      // console.log('pending aapointment');
    } else if (this.selectedTeam == 'confirmed') {
      this.appointType("confirmed");
      // console.log('pending aapointment');
    } else if (this.selectedTeam == 'prescribed') {
      this.appointType('prescribed');
      // console.log('Confirmed aapointment');
    }
  }
}
