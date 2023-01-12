import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorboardComponent } from './doctorboard.component';

describe('DoctorboardComponent', () => {
  let component: DoctorboardComponent;
  let fixture: ComponentFixture<DoctorboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
