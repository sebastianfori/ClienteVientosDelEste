import { Component, OnInit } from '@angular/core';
import { faFilter, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { DiagramFormComponent } from '../diagram-form/diagram-form.component';
import { DiagramsAdminFiltersTemplateComponent } from '../diagrams-admin-filters-template/diagrams-admin-filters-template.component';
import { Diagram } from '../types/diagram.type';

@Component({
  selector: 'app-diagrams-admin-filters',
  templateUrl: './diagrams-admin-filters.component.html',
  styleUrls: ['./diagrams-admin-filters.component.scss'],
  host: {
    class: 've-sidebar row gx-0 d-inline-flex w-100',
  }
})
export class DiagramsAdminFiltersComponent implements OnInit {
  public faFilter: IconDefinition = faFilter;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(DiagramsAdminFiltersTemplateComponent);
    offcanvasRef.componentInstance.name = 'Filters';
  }

  createNewDiagram(): void {
    console.log("createNewDiagram");
    const modalRef = this.modalService.open(DiagramFormComponent);
    modalRef.componentInstance.id = null;
    modalRef.componentInstance.trnMode = 'INS';
    modalRef.result.then((diagram: Diagram) => {
      if (diagram !== null && diagram !== undefined) {
        console.log(diagram);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }
}
