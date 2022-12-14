import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAdminFiltersTemplateComponent } from './categories-admin-filters-template.component';

describe('CategoriesAdminFiltersTemplateComponent', () => {
  let component: CategoriesAdminFiltersTemplateComponent;
  let fixture: ComponentFixture<CategoriesAdminFiltersTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAdminFiltersTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAdminFiltersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
