import { TestBed } from '@angular/core/testing';

import { DrakeKilledService } from './drake-killed.service';

describe('DrakeKilledService', () => {
  let service: DrakeKilledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrakeKilledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
