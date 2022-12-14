import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminFiltersTemplateComponent } from './users-admin-filters-template.component';

describe('UsersAdminFiltersTemplateComponent', () => {
  let component: UsersAdminFiltersTemplateComponent;
  let fixture: ComponentFixture<UsersAdminFiltersTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminFiltersTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAdminFiltersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
