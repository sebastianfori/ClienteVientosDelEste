import { TestBed } from '@angular/core/testing';

import { UserDiagramsService } from './user-diagrams.service';

describe('UserDiagramsService', () => {
  let service: UserDiagramsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDiagramsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
