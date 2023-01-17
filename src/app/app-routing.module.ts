import { Component, NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landingpage/about/about.component';
import { ContactComponent } from './landingpage/contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { PatientComponent } from './adminboard/patient/patient.component';
import { AppointmentComponent } from './adminboard/appointment/appointment.component';
import { DepartmentComponent } from './adminboard/doctor/department/department.component';
import { DoctorComponent } from './adminboard/doctor/doctor.component';
import { CreatedoctorComponent } from './adminboard/doctor/createdoctor/createdoctor.component';
import { DoctorlistComponent } from './adminboard/doctor/doctorlist/doctorlist.component';
import { AppointmentlistComponent } from './adminboard/appointment/appointmentlist/appointmentlist.component';
import { PatientlistComponent } from './adminboard/patient/patientlist/patientlist.component';
import { PatientpendingComponent } from './adminboard/patient/patientlist/patientpending/patientpending.component';
import { PatientreviewComponent } from './adminboard/patient/patientlist/patientreview/patientreview.component';
import { PendingappointmentComponent } from './adminboard/appointment/pendingappointment/pendingappointment.component';
import { AllappointmentComponent } from './adminboard/appointment/allappointment/allappointment.component';
import { OnreviewappointmentComponent } from './adminboard/appointment/onreviewappointment/onreviewappointment.component';
import { ConfirmedappointmentComponent } from './adminboard/appointment/confirmedappointment/confirmedappointment.component';
import { NewappointmentComponent } from './adminboard/appointment/newappointment/newappointment.component';
import { PatientaddmissionComponent } from './adminboard/patient/patientaddmission/patientaddmission.component';
import { PrescriptionComponent } from './adminboard/prescription/prescription.component';
import { PrescriptionlistComponent } from './adminboard/prescription/prescriptionlist/prescriptionlist.component';
import { PaymentsComponent } from './adminboard/payments/payments.component';
import { PaymentslistComponent } from './adminboard/payments/paymentslist/paymentslist.component';
import { PaymentinvoicesComponent } from './adminboard/payments/paymentinvoices/paymentinvoices.component';
import { CabinComponent } from './adminboard/cabin/cabin.component';
import { AllcabinlistComponent } from './adminboard/cabin/allcabinlist/allcabinlist.component';
import { CabincreateComponent } from './adminboard/cabin/cabincreate/cabincreate.component';
import { DiagonosisComponent } from './adminboard/diagonosis/diagonosis.component';
import { DiagonosislistComponent } from './adminboard/diagonosis/diagonosislist/diagonosislist.component';
import { PharmacyComponent } from './adminboard/pharmacy/pharmacy.component';
import { MedicineReport } from './ModelClass/MedicineReport.model';
import { SupplierComponent } from './adminboard/pharmacy/supplier/supplier.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // landing page Routing
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'admin',
    component: AdminboardComponent,
    children: [
      // ========================Appointment menu: Start=============================
      {
        path: 'appointments_list',
        component: AppointmentComponent,
        children: [
          {
            path: '',
            redirectTo: '/admin/appointments_list/all',
            pathMatch: 'full',
          },
          {
            path: 'all',
            component: AllappointmentComponent,
          },
          {
            path: 'pending',
            component: PendingappointmentComponent,
          },
          {
            path: 'ondoctor',
            component: OnreviewappointmentComponent,
          },
          {
            path: 'confirmed',
            component: ConfirmedappointmentComponent,
          },
        ],
      },
      {
        path: 'new_appointment',
        component: NewappointmentComponent,
      },
      // ========================Appointment menu: end=============================

      // ========================Doctors menu: Start=============================
      {
        path: 'doctors',
        component: DoctorlistComponent,
      },
      {
        path: 'create_dept',
        component: DepartmentComponent,
      },
      {
        path: 'createdoc',
        component: CreatedoctorComponent,
      },
      // ========================Doctors menu: end=============================
      // ========================Patient menu: Start=============================
      {
        path: 'create_patient',
        component: PatientComponent,
      },
      {
        path: 'patientlist',
        component: PatientlistComponent,
        children: [
          {
            path: 'pending',
            component: PatientpendingComponent,
          },
          {
            path: 'review',
            component: PatientreviewComponent,
          },
        ],
      },
      // {
      //   path: 'patient_admission',
      //   component: PatientaddmissionComponent,
      // },
      {
        path: 'prescription',
        component: PrescriptionlistComponent,
      },
      // ========================Patient menu: end=============================

      // ========================Payments menu: start=============================
      {
        path: 'newpayment',
        component: PaymentsComponent,
      },
      {
        path: 'paymentlist',
        component: PaymentslistComponent,
      },
      {
        path: 'payment_invoices',
        component: PaymentinvoicesComponent,
      },
      // ========================Payments menu: end=============================
      // ========================Cabin menu: start=============================
      {
        path: 'cabin_allotment',
        component: CabinComponent,
      },
      {
        path: 'cabin_status',
        component: AllcabinlistComponent,
      },
      {
        path: 'newcabin',
        component: CabincreateComponent,
      },
      // ========================Cabin menu: end=============================
      // ========================Diagonosis menu: start=============================
      {
        path: 'diagonosis',
        component: DiagonosislistComponent,
      },
      {
        path: 'creatediagonosis',
        component: DiagonosisComponent,
      },
      // ========================Diagonosis menu: end=============================
      // ========================Pharmacy menu: start=============================
      {
        path: 'medicine',
        component: PharmacyComponent,
      },
      {
        path: 'med_report',
        component: MedicineReport,
      },
      {
        path: 'med_supplier',
        component: SupplierComponent,
      },
    ],
  },

  {
    path: 'doctor',
    component: DoctorComponent,
  },

  {
    path: 'appointment',
    component: AppointmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
