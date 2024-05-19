import { TestBed } from '@angular/core/testing';

import { ReqresDomainService } from './reqres-domain.service';

describe('ReqresDomainService', () => {
  let service: ReqresDomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqresDomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
