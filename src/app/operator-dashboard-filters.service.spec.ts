import { TestBed } from '@angular/core/testing';

import { OperatorDashboardFiltersService } from './operator-dashboard-filters.service';

describe('OperatorDashboardFiltersService', () => {
  let service: OperatorDashboardFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorDashboardFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
