import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcabinlist',
  templateUrl: './allcabinlist.component.html',
  styleUrls: ['./allcabinlist.component.css']
})
export class AllcabinlistComponent implements OnInit{

  ngOnInit(): void {
    $(document).ready(function () {
      $('#table_id').DataTable();
    });
    // this method if for data table
  }

  selectedTeam = '';

  onSelect(value: string) {}

}
