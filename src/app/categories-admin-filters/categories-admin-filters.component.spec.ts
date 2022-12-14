import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAdminFiltersComponent } from './categories-admin-filters.component';

describe('CategoriesAdminFiltersComponent', () => {
  let component: CategoriesAdminFiltersComponent;
  let fixture: ComponentFixture<CategoriesAdminFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesAdminFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesAdminFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
