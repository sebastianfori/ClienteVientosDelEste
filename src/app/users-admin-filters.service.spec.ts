import { TestBed } from '@angular/core/testing';

import { UsersAdminFiltersService } from './users-admin-filters.service';

describe('UsersAdminFiltersService', () => {
  let service: UsersAdminFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersAdminFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
