import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmedappointment',
  templateUrl: './confirmedappointment.component.html',
  styleUrls: ['./confirmedappointment.component.css']
})
export class ConfirmedappointmentComponent implements OnInit{

  ngOnInit(): void {




    
       // this method if for data table
    // tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
    // https://datatables.net/examples/index

    $(document).ready(function () {
      $('#table_id').DataTable();
    });
      // this method if for data table
  }

}
