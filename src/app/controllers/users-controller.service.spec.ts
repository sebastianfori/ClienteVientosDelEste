import { TestBed } from '@angular/core/testing';

import { UsersControllerService } from './users-controller.service';

describe('UsersControllerService', () => {
  let service: UsersControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
