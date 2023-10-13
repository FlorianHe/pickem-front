import { TestBed } from '@angular/core/testing';

import { DrakeService } from './drake.service';

describe('DrakeService', () => {
  let service: DrakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
