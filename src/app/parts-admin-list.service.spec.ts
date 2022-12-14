import { TestBed } from '@angular/core/testing';

import { PartsAdminListService } from './parts-admin-list.service';

describe('PartsAdminListService', () => {
  let service: PartsAdminListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsAdminListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
