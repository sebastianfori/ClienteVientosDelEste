import { TestBed } from '@angular/core/testing';

import { UsersAdminListService } from './users-admin-list.service';

describe('UsersAdminListService', () => {
  let service: UsersAdminListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersAdminListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
