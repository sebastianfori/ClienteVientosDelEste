import { Component, OnInit } from '@angular/core';
import { faEdit, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesAdminListService } from '../categories-admin-list.service';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { Category } from '../types/category.type';

@Component({
  selector: 'app-categories-admin-list',
  templateUrl: './categories-admin-list.component.html',
  styleUrls: ['./categories-admin-list.component.scss'],
  host: {
    class: 'flex-grow-1 flex-shrink-1 p-2 d-flex justify-content-stretch align-items-stretch',
    style: 'grid-area: main;'
  }
})
export class CategoriesAdminListComponent implements OnInit {
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrashAlt;

  public categories: Category[] | undefined;

  constructor(
    public categoryList: CategoriesAdminListService,
    private modalService: NgbModal
  ) { 
    this.categoryList.categories$.subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.categoryList.refresh();
  }

  onAddNewCategory(): void {
    console.log("createNewCategory");
    const modalRef = this.modalService.open(CategoryFormComponent);
    modalRef.componentInstance.id = 0;
    modalRef.componentInstance.trnMode = 'INS';
    modalRef.result.then((category: Category) => {
      if (category !== null && category !== undefined) {
        console.log(category);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  onEditCategory(category: Category): void {
    console.log("editCategory");
    const modalRef = this.modalService.open(CategoryFormComponent);
    modalRef.componentInstance.id = category.id_cat;
    modalRef.componentInstance.trnMode = 'UPD';
    modalRef.result.then((category: Category) => {
      if (category !== null && category !== undefined) {
        console.log(category);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  onDeleteCategory(category: Category): void {
    console.log("deleteCategory");
    const modalRef = this.modalService.open(CategoryFormComponent);
    modalRef.componentInstance.id = category.id_cat;
    modalRef.componentInstance.trnMode = 'DLT';
    modalRef.result.then((category: Category) => {
      if (category !== null && category !== undefined) {
        console.log(category);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }
}
