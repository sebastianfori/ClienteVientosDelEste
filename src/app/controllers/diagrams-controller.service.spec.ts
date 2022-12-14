import { TestBed } from '@angular/core/testing';

import { DiagramsControllerService } from './diagrams-controller.service';

describe('DiagramsControllerService', () => {
  let service: DiagramsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagramsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
