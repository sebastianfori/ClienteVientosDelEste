import { TestBed } from '@angular/core/testing';

import { PartsAdminFiltersService } from './parts-admin-filters.service';

describe('PartsAdminFiltersService', () => {
  let service: PartsAdminFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsAdminFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
