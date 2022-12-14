import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAdminFiltersTemplateFormComponent } from './categories-admin-filters-template-form.component';

describe('CategoriesAdminFiltersTemplateFormComponent', () => {
  let component: CategoriesAdminFiltersTemplateFormComponent;
  let fixture: ComponentFixture<CategoriesAdminFiltersTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAdminFiltersTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAdminFiltersTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
