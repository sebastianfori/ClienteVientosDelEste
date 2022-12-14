import { TestBed } from '@angular/core/testing';

import { UserDiagramsControllerService } from './user-diagrams-controller.service';

describe('UserDiagramsControllerService', () => {
  let service: UserDiagramsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDiagramsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
