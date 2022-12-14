import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoriesAdminFiltersService } from '../categories-admin-filters.service';
import { CategoryFilter } from '../types/category-filter.type';

@Component({
  selector: 'app-categories-admin-filters-template-form',
  templateUrl: './categories-admin-filters-template-form.component.html',
  styleUrls: ['./categories-admin-filters-template-form.component.scss']
})
export class CategoriesAdminFiltersTemplateFormComponent implements OnInit {

  public filterForm: FormGroup = this.formBuilder.group({
    name_cat: new FormControl<null | string>(null)
  });

  constructor(
    private formBuilder: FormBuilder,
    private categoriesAdminFilters: CategoriesAdminFiltersService
  ) { }

  ngOnInit(): void {
    this.categoriesAdminFilters.filter$.subscribe((filter: CategoryFilter) => {
      this.filterForm.patchValue({
        name_cat: filter.name_cat
      });
    });
  }

  public onFilterChanged(): void {
    this.updateFilters();
  }

  private updateFilters(): void {
    let categoryFilter = new CategoryFilter();
    categoryFilter.name_cat = this.filterForm.get('name_cat')?.value;
    this.categoriesAdminFilters.setFilter(categoryFilter);
  }
}
