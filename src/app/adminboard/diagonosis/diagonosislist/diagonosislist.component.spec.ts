import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonosislistComponent } from './diagonosislist.component';

describe('DiagonosislistComponent', () => {
  let component: DiagonosislistComponent;
  let fixture: ComponentFixture<DiagonosislistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagonosislistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagonosislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
