import { TestBed } from '@angular/core/testing';

import { CompleteInfosProGuard } from './complete-infos-pro.guard';

describe('CompleteInfosProGuard', () => {
  let guard: CompleteInfosProGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompleteInfosProGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
