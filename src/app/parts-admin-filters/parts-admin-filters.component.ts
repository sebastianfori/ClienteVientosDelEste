import { Component, OnInit } from '@angular/core';
import { faFilter, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { PartFormComponent } from '../part-form/part-form.component';
import { PartsAdminFiltersTemplateComponent } from '../parts-admin-filters-template/parts-admin-filters-template.component';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-parts-admin-filters',
  templateUrl: './parts-admin-filters.component.html',
  styleUrls: ['./parts-admin-filters.component.scss'],
  host: {
    class: 've-sidebar row gx-0 d-inline-flex w-100',
  }
})
export class PartsAdminFiltersComponent implements OnInit {
  public faFilter: IconDefinition = faFilter;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(PartsAdminFiltersTemplateComponent);
    offcanvasRef.componentInstance.name = 'Filters';
  }

  createNewPart(): void {
    console.log("createNewPart");
    const modalRef = this.modalService.open(PartFormComponent);
    modalRef.componentInstance.id = null;
    modalRef.componentInstance.trnMode = 'INS';
    modalRef.result.then((part: Part) => {
      if (part !== null && part !== undefined) {
        console.log(part);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }
}
