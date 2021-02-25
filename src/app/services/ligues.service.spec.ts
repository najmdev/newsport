import { TestBed } from '@angular/core/testing';

import { LiguesService } from './ligues.service';

describe('LiguesService', () => {
  let service: LiguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
