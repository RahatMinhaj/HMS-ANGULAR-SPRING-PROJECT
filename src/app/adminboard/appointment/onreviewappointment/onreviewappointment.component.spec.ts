import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnreviewappointmentComponent } from './onreviewappointment.component';

describe('OnreviewappointmentComponent', () => {
  let component: OnreviewappointmentComponent;
  let fixture: ComponentFixture<OnreviewappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnreviewappointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnreviewappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
