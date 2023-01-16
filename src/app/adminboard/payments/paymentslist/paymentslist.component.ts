import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentslist',
  templateUrl: './paymentslist.component.html',
  styleUrls: ['./paymentslist.component.css'],
})
export class PaymentslistComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function () {
      $('#table_id').DataTable();
    });
    // this method if for data table
  }

  selectedTeam = '';

  onSelect(value: string) {}
}
