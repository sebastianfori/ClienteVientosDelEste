import { TestBed } from '@angular/core/testing';

import { BaseGenericService } from './base-generic.service';

describe('BaseGenericService', () => {
  let service: BaseGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
