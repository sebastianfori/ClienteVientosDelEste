import { TestBed } from '@angular/core/testing';

import { DiagramsAdminFiltersService } from './diagrams-admin-filters.service';

describe('DiagramsAdminFiltersService', () => {
  let service: DiagramsAdminFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramsAdminFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
