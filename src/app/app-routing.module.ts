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
import { PatientlistComponent } from './adminboard/patient/patientlist/patientlist.component';
import { PatientpendingComponent } from './adminboard/patient/patientlist/patientpending/patientpending.component';
import { PatientreviewComponent } from './adminboard/patient/patientlist/patientreview/patientreview.component';
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
import { AdminhomeComponent } from './adminboard/adminhome/adminhome.component';
import { MedreportComponent } from './adminboard/pharmacy/medreport/medreport.component';
import { PathologycategoryComponent } from './adminboard/diagonosis/pathology/pathologycategory/pathologycategory.component';
import { PathologyComponent } from './adminboard/diagonosis/pathology/pathology.component';
import { OperationComponent } from './adminboard/diagonosis/operation/operation.component';
import { InvoiceComponent } from './adminboard/invoice/invoice.component';
import { CanactivateGuard } from './Service/Auth/canactivate.guard';
import { ErrorComponent } from './error/error.component';
import { UsermanagementComponent } from './adminboard/usermanagement/usermanagement.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo : "home"
  },
  {
    path: 'home',
    component: LandingpageComponent,
  },
  {path: 'prescription' , component:PrescriptionComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // landing page Routing
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'admin',
    component: AdminboardComponent,
    canActivate:[CanactivateGuard],
    children: [
      {
        path: '',
        component: AdminhomeComponent
      },
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
            component: AppointmentComponent,
          }

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
        path:"pathology",
        component:PathologyComponent
      },
      {
        path:"pathology_type",
        component:PathologycategoryComponent
      },
      {
        path:"operation",
        component:OperationComponent
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
        component: MedreportComponent,
      },
      {
        path: 'med_supplier',
        component: SupplierComponent,
      },

      {
        path:'user_list',
        component:UsermanagementComponent
      }



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
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  { path: 'error', component: ErrorComponent},
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
