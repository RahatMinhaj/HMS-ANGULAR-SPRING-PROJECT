import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendingappointment',
  templateUrl: './pendingappointment.component.html',
  styleUrls: ['./pendingappointment.component.css']
})
export class PendingappointmentComponent implements OnInit{


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
