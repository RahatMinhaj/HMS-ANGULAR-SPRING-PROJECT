import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from 'src/app/ModelClass/User.model';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent {

  userList!:User[];


  

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
    'action'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  // ==============Table Properties===========



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

  userRoleChange(value:any){

  }

}
