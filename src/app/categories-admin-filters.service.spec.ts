import { TestBed } from '@angular/core/testing';

import { CategoriesAdminFiltersService } from './categories-admin-filters.service';

describe('CategoriesAdminFiltersService', () => {
  let service: CategoriesAdminFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesAdminFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
