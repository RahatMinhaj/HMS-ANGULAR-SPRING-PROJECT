import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Department } from 'src/app/ModelClass/Department.model';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Pathology } from 'src/app/ModelClass/Pathology.model';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { DepartmentService } from 'src/app/Service/Doctor/department.service';
import { DoctorService } from 'src/app/Service/Doctor/doctor.service';
import { PathologyService } from 'src/app/Service/pathology.service';
import { PatientService } from 'src/app/Service/Patient.service';
import { PaymentService } from 'src/app/Service/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit, ICommonComp<Patient> {
  patientList!: Patient[];
  deptList!: Department[];
  docListByDept!: Doctor[];

  pathologyListByUserID!: Pathology[];

  paymentForm!: FormGroup;

  // docList!:Doctor

  constructor(
    private patientService: PatientService,
    private deptService: DepartmentService,
    private docService: DoctorService,
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private pathologyService: PathologyService
  ) {}

  patient_name = '';
  patientSelect(value: any) {
    let p_id = parseInt(value);
    this.getDiagonosticDataByID(p_id);

    for (let i = 0; i < this.patientList.length; i++) {
      if (p_id === this.patientList[i].id) {
        this.patient_name =
          this.patientList[i].p_first_name +
          ' ' +
          this.patientList[i].p_last_name;
      }
    }

    this.paymentForm.controls['p_name'].setValue(this.patient_name);
    // Another way to do the task
    // this.paymentForm.setValue({
    //   ...this.paymentForm.value, p_name: this.patient_name
    //   });
  }

  getDiagonosticDataByID(p_id: number) {
    let temp:number = 0;
    let val:number = 0;
    this.pathologyService
      .getDataByUserID(p_id)
      .subscribe((data: Pathology[]) => {
        for (let i = 0; i < data.length; i++) {
          temp = data[i].pathology_price + temp;

           val= +temp
        }
        this.paymentForm.controls['test_charge'].setValue(val);
      });

    return temp;
  }

doctorCharge:number = 0;
  docChange(event:any){
    let value = event.target.value;
    
    for(let i = 0; i<this.docListByDept.length; i++){
      if(value == this.docListByDept[i].id){
        this.doctorCharge = this.docListByDept[i].visit_charge
      }

    }
    
    this.paymentForm.controls['doc_charge'].setValue(this.doctorCharge);
  }



  patientLoad() {
    this.patientService.getAll().subscribe((data: Patient[]) => {
      this.patientList = data;
      console.log(this.patientList[0]);
    });
  }

  deptSelect(value: any) {
    let department_ID = parseInt(value);
    console.log();
    this.docService
      .getDocByDepartment(department_ID)
      .subscribe((data: Doctor[]) => {
        this.docListByDept = data;
      });
  }

  doctorDeptLoad() {
    this.deptService.getAll().subscribe((data: Department[]) => {
      this.deptList = data;
      // console.log(this.deptList[0], '=============');
    });
  }

  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {
    this.paymentForm.controls['total_bill'].setValue(this.getTotal());

    this.paymentService.save(this.paymentForm.value).subscribe(
      (data) => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data saved !',
          // text: 'Data Not Found',
          icon: 'success',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        });
        this.ngOnInit();
      },
      (error) => {
        Swal.fire({
          // title: 'Are you sure !',
          title: 'Data Cannot be saved !',
          // text: 'Data Not Found',
          icon: 'error',
          // showCancelButton: true,
          // confirmButtonText: 'Yes',
          // cancelButtonText: 'No',
        });
      }
    );
  }

getTotal(){
  let sum =
  this.paymentForm.value.doc_charge +
  this.paymentForm.value.ambulance_charge +
  this.paymentForm.value.cabin_charge +
  this.paymentForm.value.med_charge +
  this.paymentForm.value.test_charge +
  this.paymentForm.value.ot_charge;

this.ttBill = sum;
let disc = (this.ttBill * this.paymentForm.value.discount) / 100;
return this.ttBill - disc;
}



  // get total() {
  //   let sum =
  //     this.paymentForm.value.doc_charge +
  //     this.paymentForm.value.ambulance_charge +
  //     this.paymentForm.value.cabin_charge +
  //     this.paymentForm.value.med_charge +
  //     this.paymentForm.value.test_charge +
  //     this.paymentForm.value.ot_charge;

  //   this.ttBill = sum;
  //   let disc = (this.ttBill * this.paymentForm.value.discount) / 100;
  //   return this.ttBill - disc;

  //   // this.paymentForm.patchValue({
  //   //   total_bill: sum
  //   // });
  // }

  edit(model: Patient, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(this.patient_name, '  From Oninit');

    this.paymentForm = this.formBuilder.group({
      id: [''],
      p_id: [''],
      p_name: [''],
      dept_id: [''],
      doc_id: [''],
      admission_date: [''],
      release_date: [''],

      doc_charge: [],
      ambulance_charge: [],
      cabin_charge: [],
      med_charge: [],
      test_charge: [],
      ot_charge: [],
      discount: [],

      total_bill: [''],
    });

    this.patientLoad();
    this.doctorDeptLoad();
  }

  ttBill: number = 0;
}
