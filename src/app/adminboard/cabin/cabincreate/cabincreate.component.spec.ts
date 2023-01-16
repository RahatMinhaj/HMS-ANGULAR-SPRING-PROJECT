import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabincreateComponent } from './cabincreate.component';

describe('CabincreateComponent', () => {
  let component: CabincreateComponent;
  let fixture: ComponentFixture<CabincreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabincreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabincreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
