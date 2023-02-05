import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { PatientService } from 'src/app/Service/Patient.service';
import { PatientlistComponent } from '../patient/patientlist/patientlist.component';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  pList!: Patient[];

  // ==============Table Properties===========
  datasource: any;
  displayedColumns: string[] = [
    'id',
    'p_first_name',
    'p_last_name',
    'p_age',
    'p_weight',
    'p_gender',
    'p_mobile',
    'p_address',
    'p_platform'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorting!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue;
  }

  constructor(
    private pService: PatientService
  ) { }

  public get totalRows(): number {
    return this.pList.length;
  }



  getAll() {
    this.pService.getAll().subscribe((data: Patient[]) => {
      this.pList = data;
      // ===========data table properties===============
      this.datasource = new MatTableDataSource<Patient>(this.pList);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sorting;
    });
  }

  ngOnInit(): void {
    
    // this method if for data table
    // tuts: https://webdamn.com/how-to-use-datatables-in-angular-8/
    // https://datatables.net/examples/index

    $(document).ready(function () {
      $('#table_id').DataTable();
    });
      // this method if for data table

 
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


this.getAll()
  }


  

}
