import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { User } from 'src/app/ModelClass/User.model';
import { UserManagementModel } from 'src/app/ModelClass/Usermanagement.model';
import { UserManagementService } from 'src/app/Service/user-management.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css'],
})
export class UsermanagementComponent
  implements ICommonComp<UserManagementModel>, OnInit
{
  userList!: UserManagementModel[];

  userEditForm!: FormGroup;
  userRoleForm!: FormGroup;

  constructor(
    private userManagementService: UserManagementService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userEditForm = this.formBuilder.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20),
          ],
        ],
        userFirstName: ['', Validators.required],
        userLastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        userDOB: [''],
        userLoc: [''],
      },
      { validator: this.matchPassword('password', 'confirmPassword') }
    );

    this.userRoleForm = this.formBuilder.group({
      Admin: [''],
      User: [''],
    });

    this.getAll();
  }

  matchPassword(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  get userNameVal() {
    return this.userEditForm.get('userName');
  }
  get userFirstName() {
    return this.userEditForm.get('userFirstName');
  }
  get userLastName() {
    return this.userEditForm.get('userLastName');
  }
  get email() {
    return this.userEditForm.get('email');
  }
  get password() {
    return this.userEditForm.get('password');
  }
  get confirmPassword() {
    return this.userEditForm.get('confirmPassword');
  }

  checkedValues: string[] = [];
  // uservalue
  // roleAssign(evetn:any){
  //   console.log(evetn.target.value , " values")

  // }

  username!: string;
  assignRole() {
    let selectVal: string[] = [];

    // console.log(this.userRoleForm.value)

    for (const controlName in this.userRoleForm.controls) {
      // get the control object
      const control = this.userRoleForm.controls[controlName];
      if (control.value == true) {
        selectVal.push(controlName);
        // console.log( " control value get : ", controlName , "  :  " ,control.value)
      }
    }
    this.userManagementService
      .applyRole(this.username, selectVal)
      .subscribe((data) => {
        console.log(data, 'from subscribe');
        this.ngOnInit();
      });
    console.log(selectVal, 'print from arrray');

    // for (const control of Object.values(this.userRoleForm.controls)) {
    //   // perform operations on each control
    //   console.log(control.value);
    //   if(control.value == true){
    //     console.log(" the checked opetion is : " , control.name)
    //   }

    // }
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
    'role',
    'action',
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

  filterRole(event: any) {
    let val = event.target.value;
    console.log(val);

    if (val === 'Admin') {
      this.userManagementService
        .filterRoles(val)
        .subscribe((data: UserManagementModel[]) => {
          this.userList = data;
          // ===========data table properties===============
          this.datasource = new MatTableDataSource<UserManagementModel>(
            this.userList
          );
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sorting;
        });
    } else if (val === 'User') {
      this.userManagementService
        .filterRoles(val)
        .subscribe((data: UserManagementModel[]) => {
          this.userList = data;
          // ===========data table properties===============
          this.datasource = new MatTableDataSource<UserManagementModel>(
            this.userList
          );
          this.datasource.paginator = this.paginator;
          this.datasource.sort = this.sorting;
        });
    } else if (val === 'all') {
      this.getAll();
    }
  }


  currentUserRole:string[] = [];
  roleManagement(row:any, modal?: any): void {
    this.modalService.open(modal, { size: 'md' }).result.then(
      (result) => {
        this.ngOnInit();
      },
      (reason) => {
        this.ngOnInit();
      }
    );

    this.username = row.username;


for(let i = 0; i<row.role.length; i++){
  this.currentUserRole.push(row.role[i].roleName)
}
this.ngOnInit();
    

    




    // for (const rows in row.role) {
    //   this.currentUserRole.push(rows.roleName);


    // }



    console.log("current users: " , this.currentUserRole)
 

    // this.docService.getuserByID(model.id).subscribe((data: Doctor) => {
    //   // console.log(data + "         ====================data comes from back" + data.dept_name);
    //   this.docModel = data;
    //   this.editDocForm.patchValue(this.docModel);
    //   // console.log(data.dept_manager + "=========-------------------------- test")
    // });
  }

  userRoleChange(value: any) {}

  getAll() {
    this.userManagementService
      .getAll()
      .subscribe((data: UserManagementModel[]) => {
        this.userList = data;
        console.log(data, '          data from ');
        // ===========data table properties===============
        this.datasource = new MatTableDataSource<UserManagementModel>(
          this.userList
        );
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sorting;
      });
  }

  create(): void {
    throw new Error('Method not implemented.');
  }

  edit(model: UserManagementModel, modal?: any): void {
    this.modalService.open(modal, { size: 'xl' }).result.then(
      (result) => {
        this.ngOnInit();
      },
      (reason) => {
        this.ngOnInit();
      }
    );

    // this.docService.getuserByID(model.id).subscribe((data: Doctor) => {
    //   // console.log(data + "         ====================data comes from back" + data.dept_name);
    //   this.docModel = data;
    //   this.editDocForm.patchValue(this.docModel);
    //   // console.log(data.dept_manager + "=========-------------------------- test")
    // });
  }

  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }
}
