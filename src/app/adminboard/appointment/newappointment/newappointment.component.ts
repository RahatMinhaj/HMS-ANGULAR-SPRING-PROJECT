import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})
export class NewappointmentComponent implements OnInit{

  appointForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.appointForm = this.formBuilder.group({
      appointment_type: [''],
      department_id: [''],
      doc_id: [''],
      appointment_date: [''],
      appointment_time: [''],
      deasease: [''],
    });
  }

  appointment() {}

}
