import { TestBed } from '@angular/core/testing';

import { AuditorDiagramsControllerService } from './auditor-diagrams-controller.service';

describe('AuditorDiagramsControllerService', () => {
  let service: AuditorDiagramsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditorDiagramsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
