import { TestBed } from '@angular/core/testing';

import { ManifestationService } from './manifestation.service';

describe('ManifestationService', () => {
  let service: ManifestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManifestationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
