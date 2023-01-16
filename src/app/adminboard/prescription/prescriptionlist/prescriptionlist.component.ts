import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescriptionlist',
  templateUrl: './prescriptionlist.component.html',
  styleUrls: ['./prescriptionlist.component.css']
})
export class PrescriptionlistComponent implements OnInit {


  ngOnInit(): void {
   
    


    $(document).ready(function () {
      $('#table_id').DataTable();
    });
    // this method if for data table
  }

  

  selectedTeam = '';

  onSelect(value: string) {

    }

  }

  


