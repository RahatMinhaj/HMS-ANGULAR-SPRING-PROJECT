import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { Payment } from 'src/app/ModelClass/Payment.model';
import { PatientService } from 'src/app/Service/Patient.service';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-paymentslist',
  templateUrl: './paymentslist.component.html',
  styleUrls: ['./paymentslist.component.css'],
})
export class PaymentslistComponent implements OnInit, ICommonComp<Payment> {
  paymentList!:Payment[];
  
  
  // Data load for invoice
  patientInfo!:Patient;
  paymentData!:Payment;

 

get sum(){
  let totalSum = this.paymentData.doc_charge+this.paymentData.ambulance_charge+this.paymentData.cabin_charge+ this.paymentData.med_charge+this.paymentData.test_charge + this.paymentData.ot_charge
  return totalSum
}

get DiscountVal(){
  if(this.paymentData.discount == null){
    return 0;
  }else{
    return this.paymentData.discount;
  }
}


get discountSum(){

  let discSum = this.sum * this.paymentData.discount/100;

  return this.sum - discSum;
}




constructor(
  private pService:PaymentService,
  private modalService:NgbModal,
  private patientService:PatientService,
  private elementRef: ElementRef
) {}



closeResult!: string;
showInvoice(model:Payment, modal?: any): void {
  this.modalService.open(modal, { size: 'xl' }).result.then(
    (result) => {
      this.ngOnInit();
      this.closeResult = `Closed with: ${result}`;
    },
    (reason) => {
      this.ngOnInit();
      this.closeResult = `Dismissed `;
    }
  );
  // Data getting from service
  // patient
  this.patientService.getuserByID(model.p_id).subscribe(data =>{
    this.patientInfo = data;
  })

  // data assigning

  this.paymentData = model;
  // this.invoiceID = model.id;

}

printModal(){

    window.print();    
    // // Get the content of the modal
    // const content = this.elementRef.nativeElement.querySelector('.modal-body');

    // // Create a new window and copy the content of the modal into that window
    // const newWindow = window.open('', '', 'height=500,width=500');
    // newWindow!.document.write(content.outerHTML);

    // // Call the window.print() method to print the content
    // newWindow!.print();
}



















  
  
  
  
  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'id',
    'invoice',
    'p_id',
    'p_name',
    'dept_id',
    'doc_id',
    'admission_date',
    'release_date',
    'doc_charge',
    'ambulance_charge',
    'med_charge',
    'test_charge',
    'ot_charge',
    'discount',
    'total_bill',
    'createdAt'
 
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

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



  ngOnInit(): void {

    this.getAll();
  }

  getAll() {
    this.pService.getAll().subscribe((data: Payment[]) => {
      this.paymentList = data;
      console.log(data);

      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Payment>(this.paymentList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });
  }







  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: Payment, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

  selectedTeam = '';

  onSelect(value: string) {}
}
