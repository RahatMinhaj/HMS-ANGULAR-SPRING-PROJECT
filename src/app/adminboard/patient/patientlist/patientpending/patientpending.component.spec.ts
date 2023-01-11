import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientpendingComponent } from './patientpending.component';

describe('PatientpendingComponent', () => {
  let component: PatientpendingComponent;
  let fixture: ComponentFixture<PatientpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientpendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
