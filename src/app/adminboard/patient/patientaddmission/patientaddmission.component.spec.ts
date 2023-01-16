import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientaddmissionComponent } from './patientaddmission.component';

describe('PatientaddmissionComponent', () => {
  let component: PatientaddmissionComponent;
  let fixture: ComponentFixture<PatientaddmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientaddmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientaddmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
