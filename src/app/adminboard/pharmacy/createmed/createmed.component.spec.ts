import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemedComponent } from './createmed.component';

describe('CreatemedComponent', () => {
  let component: CreatemedComponent;
  let fixture: ComponentFixture<CreatemedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
