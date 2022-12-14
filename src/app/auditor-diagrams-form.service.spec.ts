import { TestBed } from '@angular/core/testing';

import { AuditorDiagramsFormService } from './auditor-diagrams-form.service';

describe('AuditorDiagramsFormService', () => {
  let service: AuditorDiagramsFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditorDiagramsFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
