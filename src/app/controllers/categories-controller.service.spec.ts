import { TestBed } from '@angular/core/testing';

import { CategoriesControllerService } from './categories-controller.service';

describe('CategoriesControllerService', () => {
  let service: CategoriesControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
