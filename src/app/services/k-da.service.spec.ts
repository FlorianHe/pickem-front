import { TestBed } from '@angular/core/testing';

import { KDAService } from './k-da.service';

describe('KDAService', () => {
  let service: KDAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KDAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
