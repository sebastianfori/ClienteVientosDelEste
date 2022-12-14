import { TestBed } from '@angular/core/testing';

import { CategoriesAdminListService } from './categories-admin-list.service';

describe('CategoriesAdminListService', () => {
  let service: CategoriesAdminListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesAdminListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
