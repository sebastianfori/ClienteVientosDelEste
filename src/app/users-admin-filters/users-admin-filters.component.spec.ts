import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminFiltersComponent } from './users-admin-filters.component';

describe('UsersAdminFiltersComponent', () => {
  let component: UsersAdminFiltersComponent;
  let fixture: ComponentFixture<UsersAdminFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAdminFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
