import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createmed',
  templateUrl: './createmed.component.html',
  styleUrls: ['./createmed.component.css']
})
export class CreatemedComponent implements OnInit {
  constructor(private formBuilder:FormBuilder){}

  createMedItemForm!:FormGroup;

  ngOnInit(): void {
    this.createMedItemForm = this.formBuilder.group({
      med_id:[''],
      med_name:[''],
      med_group_name:[''],
      med_type:[''],
      med_weight:[''],
      med_description:['']
    })

  }


}
