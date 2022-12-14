import { TestBed } from '@angular/core/testing';

import { OperatorDashboardListService } from './operator-dashboard-list.service';

describe('OperatorDashboardListService', () => {
  let service: OperatorDashboardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatorDashboardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
