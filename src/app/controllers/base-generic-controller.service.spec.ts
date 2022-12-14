import { TestBed } from '@angular/core/testing';

import { BaseGenericControllerService } from './base-generic-controller.service';

describe('BaseGenericControllerService', () => {
  let service: BaseGenericControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseGenericControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
