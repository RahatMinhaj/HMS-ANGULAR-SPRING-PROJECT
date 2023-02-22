import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from '../ModelClass/Appointment.model';
import { AppointmentService } from '../Service/Doctor/appointment.service';
import { SessionstorageService } from '../Service/sessionstorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  appointmentListbyUserName!:Appointment[];



constructor(
  private sessionStorage:SessionstorageService,
  private appointmentService:AppointmentService
){}


  fullName = this.sessionStorage.getData().user.userFirstName + " " + this.sessionStorage.getData().user.userLastName
  userName =this.sessionStorage.getData().user.username
  
  userLocation = this.sessionStorage.getData().user.userLoc;
  userEmail= this.sessionStorage.getData().user.email;
userMobile = this.sessionStorage.getData().user.userMobile;
userGender = this.sessionStorage.getData().user.userGender;















// ==============Table Properties===========
datasource: any;
displayedColumns: string[] = [
  'id',
  'apStatus',
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
  'apDate',
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
  this.appointmentService.getAppointmentListByUserName(this.userName).subscribe((data: Appointment[]) => {
    this.appointmentListbyUserName = data;
    // console.log(data);

    // ===========data table properties===============
    this.datasource = new MatTableDataSource<Appointment>(this.appointmentListbyUserName);
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sorting;
  });
}



}
