import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAccordion, NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import {MatInputModule} from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule} from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppointmentComponent } from './adminboard/appointment/appointment.component';
import { DepartmentComponent } from './adminboard/doctor/department/department.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { CreatedoctorComponent } from './adminboard/doctor/createdoctor/createdoctor.component';
import { PatientlistComponent } from './adminboard/patient/patientlist/patientlist.component';
import { PatientpendingComponent } from './adminboard/patient/patientlist/patientpending/patientpending.component';
import { PatientreviewComponent } from './adminboard/patient/patientlist/patientreview/patientreview.component';
import { NewappointmentComponent } from './adminboard/appointment/newappointment/newappointment.component';
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
import { PrescriptionlistComponent } from './adminboard/prescription/prescriptionlist/prescriptionlist.component';
import { PatientaddmissionComponent } from './adminboard/patient/patientaddmission/patientaddmission.component';
import { PaymentslistComponent } from './adminboard/payments/paymentslist/paymentslist.component';
import { PaymentinvoicesComponent } from './adminboard/payments/paymentinvoices/paymentinvoices.component';
import { AllcabinlistComponent } from './adminboard/cabin/allcabinlist/allcabinlist.component';
import { CabincreateComponent } from './adminboard/cabin/cabincreate/cabincreate.component';
import { DiagonosisComponent } from './adminboard/diagonosis/diagonosis.component';
import { DiagonosislistComponent } from './adminboard/diagonosis/diagonosislist/diagonosislist.component';
import { SupplierComponent } from './adminboard/pharmacy/supplier/supplier.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhomeComponent } from './adminboard/adminhome/adminhome.component';
import { MatSortModule } from '@angular/material/sort';
import { DoctorlistComponent } from './adminboard/doctor/doctorlist/doctorlist.component';
import Swal from 'sweetalert2';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PathologyComponent } from './adminboard/diagonosis/pathology/pathology.component';
import { PathologycategoryComponent } from './adminboard/diagonosis/pathology/pathologycategory/pathologycategory.component';
import { OperationComponent } from './adminboard/diagonosis/operation/operation.component';
import { InvoiceComponent } from './adminboard/invoice/invoice.component';
import { UsermanagementComponent } from './adminboard/usermanagement/usermanagement.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { JwtInterceptor } from './Helper/jwt.interceptor';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { QuickappointmentComponent } from './adminboard/appointment/quickappointment/quickappointment.component';


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
    PrescriptionlistComponent,
    PatientaddmissionComponent,
    PaymentslistComponent,
    PaymentinvoicesComponent,
    AllcabinlistComponent,
    CabincreateComponent,
    DiagonosisComponent,
    DiagonosislistComponent,
    SupplierComponent,
    SignupComponent,
    AdminhomeComponent,
    DoctorlistComponent,
    DepartmentComponent,
    NewappointmentComponent,
    PathologyComponent,
    PathologycategoryComponent,
    OperationComponent,
    InvoiceComponent,
    UsermanagementComponent,
    ErrorComponent,
    ProfileComponent,
    QuickappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CarouselModule,

    DataTablesModule,
    NgbModule,
    NgbAccordion,

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


    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
  


    // for ip and device
    // DeviceDetectorService,
    



    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,





    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent],
})
export class AppModule { }
