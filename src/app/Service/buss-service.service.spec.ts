import { TestBed } from '@angular/core/testing';

import { BussServiceService } from './buss-service.service';

describe('BussServiceService', () => {
  let service: BussServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
