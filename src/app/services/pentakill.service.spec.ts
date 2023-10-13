import { TestBed } from '@angular/core/testing';

import { PentakillService } from './pentakill.service';

describe('PentakillService', () => {
  let service: PentakillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PentakillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
