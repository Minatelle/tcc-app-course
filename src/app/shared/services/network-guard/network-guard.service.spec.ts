import { TestBed } from '@angular/core/testing';

import { NetworkGuardService } from './network-guard.service';

describe('NetworkGuardService', () => {
  let service: NetworkGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
