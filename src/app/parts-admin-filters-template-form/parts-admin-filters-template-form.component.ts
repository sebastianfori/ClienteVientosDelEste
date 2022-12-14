import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PartsAdminFiltersService } from '../parts-admin-filters.service';
import { PartsAdminListService } from '../parts-admin-list.service';
import { Category } from '../types/category.type';
import { PartFilter } from '../types/part-filter.type';

@Component({
  selector: 'app-parts-admin-filters-template-form',
  templateUrl: './parts-admin-filters-template-form.component.html',
  styleUrls: ['./parts-admin-filters-template-form.component.scss']
})
export class PartsAdminFiltersTemplateFormComponent implements OnInit {
  public categories: Category[] = [];

  public filterForm: FormGroup = this.formBuilder.group({
    name_piez: new FormControl<null | string>(null),
    id_cat: new FormControl<null | number>(null),
    height_under: new FormControl<null | number>(null),
    height_over: new FormControl<null | number>(null),
    resis_wind_under: new FormControl<null | number>(null),
    resis_wind_over: new FormControl<null | number>(null),
    material: new FormControl<null | string>(null)
  });

  constructor(
    private formBuilder: FormBuilder,
    private partsAdminFilters: PartsAdminFiltersService,
    private partsAdminList: PartsAdminListService
  ) { 
  }

  ngOnInit(): void {
    this.partsAdminList.categories$.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
    this.partsAdminFilters.filter$.subscribe((filter: PartFilter) => {
      this.filterForm.patchValue({
        name_piez: filter.name_piez,
        id_cat: filter.id_cat,
        height_under: filter.height_under,
        height_over: filter.height_over,
        resis_wind_under: filter.resis_wind_under,
        resis_wind_over: filter.resis_wind_over,
        material: filter.material
      });
    });
  }

  public onFilterChanged(): void {
    this.updateFilters();
  }

  private updateFilters(): void {
    let partFilter = new PartFilter();
    partFilter.name_piez = this.filterForm.get('name_piez')?.value;
    partFilter.id_cat = this.filterForm.get('id_cat')?.value;
    partFilter.height_under = this.filterForm.get('height_under')?.value;
    partFilter.height_over = this.filterForm.get('height_over')?.value;
    partFilter.resis_wind_under = this.filterForm.get('resis_wind_under')?.value;
    partFilter.resis_wind_over = this.filterForm.get('resis_wind_over')?.value;
    partFilter.material = this.filterForm.get('material')?.value;
    this.partsAdminFilters.setFilter(partFilter);
  }
}
