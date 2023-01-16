import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonosisComponent } from './diagonosis.component';

describe('DiagonosisComponent', () => {
  let component: DiagonosisComponent;
  let fixture: ComponentFixture<DiagonosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagonosisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagonosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
