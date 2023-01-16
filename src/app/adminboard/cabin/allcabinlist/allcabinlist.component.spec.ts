import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcabinlistComponent } from './allcabinlist.component';

describe('AllcabinlistComponent', () => {
  let component: AllcabinlistComponent;
  let fixture: ComponentFixture<AllcabinlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcabinlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcabinlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
