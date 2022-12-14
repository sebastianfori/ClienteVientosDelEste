import { TestBed } from '@angular/core/testing';

import { AuditorDiagramsService } from './auditor-diagrams.service';

describe('AuditorDiagramsService', () => {
  let service: AuditorDiagramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditorDiagramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
