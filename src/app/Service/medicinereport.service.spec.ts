import { TestBed } from '@angular/core/testing';

import { MedicinereportService } from './medicinereport.service';

describe('MedicinereportService', () => {
  let service: MedicinereportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinereportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
