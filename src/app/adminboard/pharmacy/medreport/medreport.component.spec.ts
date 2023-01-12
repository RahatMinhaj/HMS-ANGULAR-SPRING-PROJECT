import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedreportComponent } from './medreport.component';

describe('MedreportComponent', () => {
  let component: MedreportComponent;
  let fixture: ComponentFixture<MedreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
