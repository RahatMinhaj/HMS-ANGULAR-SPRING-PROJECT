import { Component, OnInit } from '@angular/core';
import { ICommonComp } from 'src/app/Interfaces/ICommonComp';
import { Medicine } from 'src/app/ModelClass/Medicine.model';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit, ICommonComp<Medicine> {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }










  getAll() {
    throw new Error('Method not implemented.');
  }
  create(): void {
    throw new Error('Method not implemented.');
  }
  edit(model: Medicine, modal?: any): void {
    throw new Error('Method not implemented.');
  }
  updateData() {
    throw new Error('Method not implemented.');
  }
  deleteByID(id: number): void {
    throw new Error('Method not implemented.');
  }


}
