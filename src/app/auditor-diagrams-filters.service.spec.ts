import { TestBed } from '@angular/core/testing';

import { AuditorDiagramsFiltersService } from './auditor-diagrams-filters.service';

describe('AuditorDiagramsFiltersService', () => {
  let service: AuditorDiagramsFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditorDiagramsFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
