import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DiagramsAdminFiltersService } from '../diagrams-admin-filters.service';
import { OperatorDashboardFiltersService } from '../operator-dashboard-filters.service';
import { DiagramFilter } from '../types/diagram-filter.type';
import { DiagramState, DiagramStateMapping } from '../types/diagram.type';

@Component({
  selector: 'app-operator-dashboard-filters-template-form',
  templateUrl: './operator-dashboard-filters-template-form.component.html',
  styleUrls: ['./operator-dashboard-filters-template-form.component.scss']
})
export class OperatorDashboardFiltersTemplateFormComponent implements OnInit {
  public diagramStateMapping = DiagramStateMapping;
  public diagramStates: DiagramState[] = Object.values(DiagramState).filter((value) => typeof value === 'string') as DiagramState[];

  public filterForm: FormGroup = this.formBuilder.group({
    id_diag: new FormControl<null | number>(null),
    name_diag: new FormControl<null | string>(null),
    id_base: new FormControl<null | number>(null),
    id_body: new FormControl<null | number>(null),
    id_blade: new FormControl<null | number>(null),
    state: new FormControl<null | DiagramState>(null)
  });

  constructor(
    private formBuilder: FormBuilder,
    private diagramsAdminFilters: OperatorDashboardFiltersService
  ) { }

  ngOnInit(): void {
    this.diagramsAdminFilters.setFilter(new DiagramFilter());
    this.diagramsAdminFilters.filter$.subscribe((filter: DiagramFilter) => {
      this.filterForm.patchValue({
        id_diag: filter.id_diag,
        name_diag: filter.name_diag,
        id_base: filter.id_base,
        id_body: filter.id_body,
        id_blade: filter.id_blade,
        state: filter.state
      });
    });
  }

  public onFilterChanged(): void {
    this.updateFilters();
  }

  private updateFilters(): void {
    let diagramFilter = new DiagramFilter();
    diagramFilter.id_diag = this.filterForm.get('id_diag')?.value;
    diagramFilter.name_diag = this.filterForm.get('name_diag')?.value;
    diagramFilter.id_base = this.filterForm.get('id_base')?.value;
    diagramFilter.id_body = this.filterForm.get('id_body')?.value;
    diagramFilter.id_blade = this.filterForm.get('id_blade')?.value;
    diagramFilter.state = this.filterForm.get('state')?.value;
    this.diagramsAdminFilters.setFilter(diagramFilter);
  }
}
