import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Payment } from 'src/app/ModelClass/Payment.model';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-paymentslist',
  templateUrl: './paymentslist.component.html',
  styleUrls: ['./paymentslist.component.css'],
})
export class PaymentslistComponent implements OnInit, ICommonComp<Payment> {
  paymentList!:Payment[];
  
  
  
  
  
  
  
  
  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'id',
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

  constructor(
    private pService:PaymentService
  ) {}

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
