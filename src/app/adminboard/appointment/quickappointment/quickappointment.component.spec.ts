import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickappointmentComponent } from './quickappointment.component';

describe('QuickappointmentComponent', () => {
  let component: QuickappointmentComponent;
  let fixture: ComponentFixture<QuickappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
