import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientreviewComponent } from './patientreview.component';

describe('PatientreviewComponent', () => {
  let component: PatientreviewComponent;
  let fixture: ComponentFixture<PatientreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
