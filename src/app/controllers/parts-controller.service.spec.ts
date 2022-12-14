import { TestBed } from '@angular/core/testing';

import { PartsControllerService } from './parts-controller.service';

describe('PartsControllerService', () => {
  let service: PartsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
