import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Appointment } from 'src/app/ModelClass/Appointment.model';
import { Department } from 'src/app/ModelClass/Department.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Patient } from 'src/app/ModelClass/patient.model';
import { AppointmentService } from 'src/app/Service/Doctor/appointment.service';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';
import { PatientService } from 'src/app/Service/patient.service';
import { SessionstorageService } from 'src/app/Service/sessionstorage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-quickappointment',
  templateUrl: './quickappointment.component.html',
  styleUrls: ['./quickappointment.component.css']
})
export class QuickappointmentComponent implements OnInit {
  deptList!: Department[];

  quickAppointment!: FormGroup;
  docNameStatus = true;
  deptSelect = '';
  docByDepartment!: Doctor[];



  pType: boolean = false;

  pTypeChange(val: any) {
    const valu = val.target.value;
    if (valu == "new") {
      this.pType = false;
      this.ngOnInit();
    } else if (valu == "old") {
      this.pType = true;
    }
  }


  playerName!: number;
  setPatientInfo() {

    this.patientService.getuserByID(this.playerName).subscribe((data: Patient) => {
      let pData = {
        p_id: data.id,

        apFirstName: data.p_first_name,
        apLastName: data.p_last_name,
        apMobile: data.p_mobile,
        apGender: data.p_gender,
        apAge: data.p_age,


        id: '',
        apSerial: '',
        apDate: '',
        apEntryDate: '',
        dept_id: '',
        doc_id: '',
        apLocation: '',
        apDeseaseDetails: '',
        emp_id: '',
        apStatus: 'Pending',
        p_type: 'Old',

      }

      this.quickAppointment.patchValue(pData);
      console.log(this.quickAppointment.value.apFirstName)
    },


      error => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data Not Found !',
          // text: 'Data Not Found',
          icon: 'error',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        })
      }


    )

  }



  onSelect(aDept: any) {
    // console.log(aDept.target.value + "==============")
    // console.log(aDept + "====================")
    let deptID = parseInt(aDept);

    if (deptID == null) {
      alert("Please Select the Department First");
    } else {
      this.docService.getDocByDepartment(deptID).subscribe((data: Doctor[]) => {
        this.docByDepartment = data;
        this.docNameStatus = true;
        // console.log(data)
      });
    }

    // =====================Another Way=====================
    //   const selectedDeptId = aDept;
    //   const split = selectedDeptId.split(": ");
    //   const depTID = parseInt(split[1])
    // // console.log(selectedDeptId);
    //   // console.log(value.id + "==================================dddddddd")
    //   if (depTID == null) {
    // alert("Please Select a Department")

    //   } else {  
    //     this.docService
    //       .getDocByDepartment(depTID)
    //       .subscribe((data: Doctor[]) => {
    //         this.docByDepartment = data;
    //         this.docNameStatus = true;
    //         console.log(data)
    //       });
    //   }
  }




  constructor(
    private formBuilder: FormBuilder,
    private deptService: DepartmentService,
    private docService: DoctorService,
    private patientService: PatientService,
    private appointService: AppointmentService,
    private sessionStorage: SessionstorageService
  ) { }

  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {

    console.log(this.filledUserName, "appojslkdfjklsdf")
    console.log(this.quickAppointment.value.apFirstName + "999999999999")
    this.appointService.save(this.quickAppointment.value).subscribe(

      data => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data saved !',
          // text: 'Data Not Found',
          icon: 'success',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        })
        this.ngOnInit();

      },
      error => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data Cannot be saved !',
          // text: 'Data Not Found',
          icon: 'error',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        })

      })

  }
  edit(model: Appointment, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }




  filledUserName = this.sessionStorage.getData().user.username;
  ngOnInit(): void {
    this.quickAppointment = this.formBuilder.group({
      id: [''],
      p_id: [''],
      p_type: 'New',
      apSerial: [''],
      apFirstName: [''],
      apLastName: [''],
      apMobile: [''],
      apDate: [''],
      apEntryDate: [''],
      dept_id: [''],
      doc_id: [''],
      apLocation: [''],
      apGender: [''],
      apAge: [''],
      apDeseaseDetails: [''],
      emp_id: [''],
      apStatus: 'Pending',
      appointmentuserName: [this.filledUserName]
    });



    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
    })
  }

}

