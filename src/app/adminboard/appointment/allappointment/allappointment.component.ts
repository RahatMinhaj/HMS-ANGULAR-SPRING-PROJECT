import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allappointment',
  templateUrl: './allappointment.component.html',
  styleUrls: ['./allappointment.component.css'],
})
export class AllappointmentComponent implements OnInit {
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
