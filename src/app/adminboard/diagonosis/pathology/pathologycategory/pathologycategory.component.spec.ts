import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologycategoryComponent } from './pathologycategory.component';

describe('PathologycategoryComponent', () => {
  let component: PathologycategoryComponent;
  let fixture: ComponentFixture<PathologycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathologycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
