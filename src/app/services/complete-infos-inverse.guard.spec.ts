import { TestBed } from '@angular/core/testing';

import { CompleteInfosInverseGuard } from './complete-infos-inverse.guard';

describe('CompleteInfosInverseGuard', () => {
  let guard: CompleteInfosInverseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompleteInfosInverseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
