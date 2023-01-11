import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedappointmentComponent } from './confirmedappointment.component';

describe('ConfirmedappointmentComponent', () => {
  let component: ConfirmedappointmentComponent;
  let fixture: ComponentFixture<ConfirmedappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
