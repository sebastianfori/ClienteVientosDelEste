import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminFiltersTemplateFormComponent } from './users-admin-filters-template-form.component';

describe('UsersAdminFiltersTemplateFormComponent', () => {
  let component: UsersAdminFiltersTemplateFormComponent;
  let fixture: ComponentFixture<UsersAdminFiltersTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminFiltersTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAdminFiltersTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
