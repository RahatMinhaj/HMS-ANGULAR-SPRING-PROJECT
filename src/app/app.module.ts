import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-owl-carousel-o';

// this method if for data table
// tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
// https://datatables.net/examples/index
import { DataTablesModule } from 'angular-datatables';

// angular materials
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './landingpage/about/about.component';
import { ContactComponent } from './landingpage/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { PatientComponent } from './adminboard/patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './adminboard/appointment/appointment.component';
import { DepartmentComponent } from './adminboard/doctor/department/department.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { CreatedoctorComponent } from './adminboard/doctor/createdoctor/createdoctor.component';
import { PatientlistComponent } from './adminboard/patient/patientlist/patientlist.component';
import { PatientpendingComponent } from './adminboard/patient/patientlist/patientpending/patientpending.component';
import { PatientreviewComponent } from './adminboard/patient/patientlist/patientreview/patientreview.component';
import { NewappointmentComponent } from './adminboard/appointment/newappointment/newappointment.component';
import { AllappointmentComponent } from './adminboard/appointment/allappointment/allappointment.component';
import { PendingappointmentComponent } from './adminboard/appointment/pendingappointment/pendingappointment.component';
import { ConfirmedappointmentComponent } from './adminboard/appointment/confirmedappointment/confirmedappointment.component';
import { OnreviewappointmentComponent } from './adminboard/appointment/onreviewappointment/onreviewappointment.component';
import { BillingComponent } from './adminboard/billing/billing.component';
import { PrescriptionComponent } from './adminboard/prescription/prescription.component';
import { CabinComponent } from './adminboard/cabin/cabin.component';
import { LabComponent } from './adminboard/lab/lab.component';
import { EmployeeComponent } from './adminboard/employee/employee.component';
import { PharmacyComponent } from './adminboard/pharmacy/pharmacy.component';
import { AmbulanceComponent } from './adminboard/ambulance/ambulance.component';
import { DoctorboardComponent } from './doctorboard/doctorboard.component';
import { EmployeeDepartmentComponent } from './adminboard/employee-department/employee-department.component';
import { CreatemedComponent } from './adminboard/pharmacy/createmed/createmed.component';
import { MedreportComponent } from './adminboard/pharmacy/medreport/medreport.component';
import { PaymentsComponent } from './adminboard/payments/payments.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    AdminboardComponent,
    PatientComponent,
    AppointmentComponent,
    DepartmentComponent,
    HeaderComponent,
    FooterComponent,
    CreatedoctorComponent,
    PatientlistComponent,
    PatientpendingComponent,
    PatientreviewComponent,
    NewappointmentComponent,
    AllappointmentComponent,
    PendingappointmentComponent,
    ConfirmedappointmentComponent,
    OnreviewappointmentComponent,
    BillingComponent,
    PrescriptionComponent,
    CabinComponent,
    LabComponent,
    EmployeeComponent,
    PharmacyComponent,
    AmbulanceComponent,
    DoctorboardComponent,
    EmployeeDepartmentComponent,
    CreatemedComponent,
    MedreportComponent,
    PaymentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    CarouselModule,

    DataTablesModule,
    NgbModule,


    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
