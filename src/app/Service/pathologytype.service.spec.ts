import { TestBed } from '@angular/core/testing';

import { PathologytypeService } from './pathologytype.service';

describe('PathologytypeService', () => {
  let service: PathologytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathologytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
