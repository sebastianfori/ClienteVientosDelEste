import { TestBed } from '@angular/core/testing';

import { DiagramsAdminListService } from './diagrams-admin-list.service';

describe('DiagramsAdminListService', () => {
  let service: DiagramsAdminListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramsAdminListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
