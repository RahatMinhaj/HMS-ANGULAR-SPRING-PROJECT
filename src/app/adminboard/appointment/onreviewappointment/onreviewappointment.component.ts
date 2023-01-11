import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onreviewappointment',
  templateUrl: './onreviewappointment.component.html',
  styleUrls: ['./onreviewappointment.component.css']
})
export class OnreviewappointmentComponent implements OnInit{



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
