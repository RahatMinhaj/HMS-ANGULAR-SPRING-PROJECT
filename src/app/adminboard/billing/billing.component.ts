import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{

  billForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {

    this.billForm = this.formBuilder.group({
      bill_id:[''],
      p_id:[''],
      doc_charge:[''],
      medicine_charge:[''],
      cabin_charge:[''],
      ambulance_charge:[''],
      operation_charge:[''],
      lab_charge:[''],
      discount:[''],
      total_bill:[''],
      vat_tax:[''],
      paid:[''],
      due:['']
    })

  }
  createBill(){
      
  }




}
