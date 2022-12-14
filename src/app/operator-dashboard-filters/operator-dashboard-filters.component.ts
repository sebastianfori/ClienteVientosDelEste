import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilter, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OperatorDashboardFiltersTemplateComponent } from '../operator-dashboard-filters-template/operator-dashboard-filters-template.component';

@Component({
  selector: 'app-operator-dashboard-filters',
  templateUrl: './operator-dashboard-filters.component.html',
  styleUrls: ['./operator-dashboard-filters.component.scss'],
  host: {
    class: 've-sidebar row gx-0 d-inline-flex w-100',
  }
})
export class OperatorDashboardFiltersComponent implements OnInit {
  public faFilter: IconDefinition = faFilter;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(OperatorDashboardFiltersTemplateComponent);
    offcanvasRef.componentInstance.name = 'Filters';
  }

  createNewDiagram(): void {
    this.router.navigate(['/assembly/0']);
  }
}
