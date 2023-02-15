import { TestBed } from '@angular/core/testing';

import { CabinallotmentService } from './cabinallotment.service';

describe('CabinallotmentService', () => {
  let service: CabinallotmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinallotmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
