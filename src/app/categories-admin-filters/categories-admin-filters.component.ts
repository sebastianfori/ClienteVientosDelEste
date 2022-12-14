import { Component, OnInit } from '@angular/core';
import { faFilter, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesAdminFiltersTemplateComponent } from '../categories-admin-filters-template/categories-admin-filters-template.component';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { Category } from '../types/category.type';

@Component({
  selector: 'app-categories-admin-filters',
  templateUrl: './categories-admin-filters.component.html',
  styleUrls: ['./categories-admin-filters.component.scss'],
  host: {
    class: 've-sidebar row gx-0 d-inline-flex w-100',
  }
})
export class CategoriesAdminFiltersComponent implements OnInit {
  public faFilter: IconDefinition = faFilter;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(CategoriesAdminFiltersTemplateComponent);
    offcanvasRef.componentInstance.name = 'Filters';
  }

  createNewCategory(): void {
    console.log("createNewCategory");
    const modalRef = this.modalService.open(CategoryFormComponent);
    modalRef.componentInstance.id = null;
    modalRef.componentInstance.trnMode = 'INS';
    modalRef.result.then((category: Category) => {
      if (category !== null && category !== undefined) {
        console.log(category);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }
}
