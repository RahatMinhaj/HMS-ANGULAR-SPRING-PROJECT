import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // this method if for data table
    // tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
    // https://datatables.net/examples/index

    $(document).ready(function () {
      $('#table_id').DataTable();
    });
    // this method if for data table
  }

  

  selectedTeam = '';

  onSelect(value: string) {
    this.selectedTeam = value;
    if (this.selectedTeam == 'all') {
      this.router.navigate(['/admin/appointments_list/all']);
      console.log('all aapointment');
    } else if (this.selectedTeam == 'pending') {
      this.router.navigate(['/admin/appointments_list/pending']);
      console.log('pending aapointment');
    } else if (this.selectedTeam == 'doctor') {
      this.router.navigate(['/admin/appointments_list/ondoctor']);
      console.log('pending aapointment');
    } else if (this.selectedTeam == 'confirm') {
      this.router.navigate(['/admin/appointments_list/confirmed']);
      console.log('Confirmed aapointment');
    }
  }
}
