import { TestBed } from '@angular/core/testing';

import { ApisqlService } from './apisql.service';

describe('ApisqlService', () => {
  let service: ApisqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
