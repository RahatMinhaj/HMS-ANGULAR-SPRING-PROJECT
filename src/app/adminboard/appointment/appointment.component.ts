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

  appointmentModel!:Appointment;
  editAppointForm!:FormGroup;
  deptList!:Department[];
  docByDepartment!: Doctor[];

  constructor(

    private appointService: AppointmentService,
    private ngModal:NgbModal

  ) {}

  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'id',
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
    'apStatus',
    'apDate',
    'apEntryDate',
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

  getAll() {
    this.appointService.getAll().subscribe((data: Appointment[]) => {
      this.aptList = data;
      console.log(data);

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
    } else if (this.selectedTeam == 'confirm') {
      this.appointType('confirm');
      // console.log('pending aapointment');
    } else if (this.selectedTeam == 'prescribed') {
      this.appointType('prescribed');
      // console.log('Confirmed aapointment');
    }
  }
}
