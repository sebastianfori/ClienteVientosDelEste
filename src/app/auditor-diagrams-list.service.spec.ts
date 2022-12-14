import { TestBed } from '@angular/core/testing';

import { AuditorDiagramsListService } from './auditor-diagrams-list.service';

describe('AuditorDiagramsListService', () => {
  let service: AuditorDiagramsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditorDiagramsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
