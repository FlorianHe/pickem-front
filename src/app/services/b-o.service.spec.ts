import { TestBed } from '@angular/core/testing';

import { BOService } from './b-o.service';

describe('BOService', () => {
  let service: BOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
