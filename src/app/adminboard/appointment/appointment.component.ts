import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {

  constructor() {}

  ngOnInit() {

           // this method if for data table
    // tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
    // https://datatables.net/examples/index

    $(document).ready(function () {
      $('#table_id').DataTable();
    });
      // this method if for data table
    
  }


}
