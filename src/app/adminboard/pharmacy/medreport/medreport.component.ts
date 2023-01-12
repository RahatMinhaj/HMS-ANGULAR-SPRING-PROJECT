import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medreport',
  templateUrl: './medreport.component.html',
  styleUrls: ['./medreport.component.css']
})
export class MedreportComponent implements OnInit {
  createMedReportForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}


  ngOnInit(): void {
    this.createMedReportForm = this.formBuilder.group({
      med_report_id:[''],
      med_id:[''],
      med_company:[''],
      med_quantity:[''],
      med_courty:[''],
      med_expiry_date:[''],
      med_production_date:[''],
      supplier_id:[''],
      med_price:['']
    })

  }

  createMedReport(){

  }

}
