import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Doctor } from 'src/app/ModelClass/Doctor.model';
import { Employee } from 'src/app/ModelClass/Employee.mode';
import { Pathology } from 'src/app/ModelClass/Pathology.model';
import { PathologyType } from 'src/app/ModelClass/PathologyType.model';
import { Patient } from 'src/app/ModelClass/Patient.model';
import { PathologyService } from 'src/app/Service/pathology.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit,ICommonComp<Pathology>{
 
 pathologyForm!:FormGroup;



 patientList!:Patient[];
 emp_id_pathologist!:Employee[]; //need to custom query for filtering only pathologist
 docList!:Doctor[];
 pathologyTypeList!:PathologyType[];
 
 
 
 constructor(
  private formBuilder:FormBuilder,
  private pathologyService:PathologyService
 ){}


 
  ngOnInit(): void {
    this.pathologyForm = this.formBuilder.group({
      id:[''],
      p_id:[''],
      pathologist_id:[''],            //should be from employee table where pathologist will be there
      doc_id:[''],                    //doct reference id
      pathology_type_id:[''],
      pathology_date:[''],
      pathology_price:[''],
      pathology_desc:['']
    })
  }



 // ==============Table Properties===========
 datasource: any;
 displayedColumns: string[] = ['id', 'p_id', 'pathologist_id',"doc_id","pathology_type_id", "pathology_date","pathology_price","pathology_desc", "action"]
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sorting!: MatSort;

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.datasource.filter = filterValue;
   // this.deptList.sort = 
   // this.deptList.filter = filterValue.trim().toLowerCase();
   // if (this.deptList.paginator) {
   //   this.deptList.paginator.firstPage();
   // }
   // }
 }









  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: Pathology, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }

}
