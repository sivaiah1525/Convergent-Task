import { TestBed } from '@angular/core/testing';

import { ServestestService } from './servestest.service';

describe('ServestestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServestestService = TestBed.get(ServestestService);
    expect(service).toBeTruthy();
  });
});
