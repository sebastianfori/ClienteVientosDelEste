import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilter, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { AuditorDiagramsFiltersTemplateComponent } from '../auditor-diagrams-filters-template/auditor-diagrams-filters-template.component';
import { AuditorDiagramsListService } from '../auditor-diagrams-list.service';

@Component({
  selector: 'app-auditor-diagrams-filters',
  templateUrl: './auditor-diagrams-filters.component.html',
  styleUrls: ['./auditor-diagrams-filters.component.scss'],
  host: {
    class: 've-sidebar row gx-0 d-inline-flex w-100',
  } 
})
export class AuditorDiagramsFiltersComponent implements OnInit {
  public faFilter: IconDefinition = faFilter;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private router: Router,
    private auditorDiagramsservces : AuditorDiagramsListService, 
  ) { }

  ngOnInit(): void {
  }
  
  open() {
    const offcanvasRef = this.offcanvasService.open(AuditorDiagramsFiltersTemplateComponent);
    offcanvasRef.componentInstance.name = 'Filters';

  }
  aproveAll() {
    this.auditorDiagramsservces.aproveAll();
  }
}
