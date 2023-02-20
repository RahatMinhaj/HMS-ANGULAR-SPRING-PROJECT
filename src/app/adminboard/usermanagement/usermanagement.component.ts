import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { User } from 'src/app/ModelClass/User.model';
import { UserManagementModel } from 'src/app/ModelClass/Usermanagement.model';
import { UserManagementService } from 'src/app/Service/user-management.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
})
export class UsermanagementComponent implements ICommonComp<UserManagementModel>,OnInit {
  userList!: UserManagementModel[];

  constructor(private userManagementService: UserManagementService) {}


  


  ngOnInit(): void {

    this.getAll()
  }

  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'username',
    'email',
    'userFirstName',
    'userLastName',
    'userDOB',
    'userLoc',
    'userRegistrationDate',
    'role'

    
    
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


  filterRole(event:any){
    let val = event.target.value;
    console.log(val);

    if(val === "Admin"){
      this.userManagementService.filterRoles(val).subscribe((data:UserManagementModel[]) =>{
        this.userList = data;
        // ===========data table properties===============
        this.datasource = new MatTableDataSource<UserManagementModel>(this.userList);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sorting;
      })
    }else if(val === "User"){

      this.userManagementService.filterRoles(val).subscribe((data:UserManagementModel[]) =>{
        this.userList = data;
        // ===========data table properties===============
        this.datasource = new MatTableDataSource<UserManagementModel>(this.userList);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sorting;
      })

    }else if(val === "all"){
      this.getAll();


    }

  }





  userRoleChange(value: any) {}


  getAll() {
    this.userManagementService.getAll().subscribe((data: UserManagementModel[]) => {
      this.userList = data;
      console.log(data, "          data from ")
        // ===========data table properties===============
        this.datasource = new MatTableDataSource<UserManagementModel>(this.userList);
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sorting;
    });
  }



  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: UserManagementModel, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }
}
