import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentinvoicesComponent } from './paymentinvoices.component';

describe('PaymentinvoicesComponent', () => {
  let component: PaymentinvoicesComponent;
  let fixture: ComponentFixture<PaymentinvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentinvoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
