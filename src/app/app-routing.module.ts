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

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
  },
  { path: 'login', component: LoginComponent },
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
      // ========================Patient menu: end=============================
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
