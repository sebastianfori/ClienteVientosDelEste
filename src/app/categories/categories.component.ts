import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesAdminListService } from '../categories-admin-list.service';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { Category } from '../types/category.type';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  host: {
    class: 'container-fluid flex-grow-1 d-flex justify-content-stretch align-items-stretch'
  }
})
export class CategoriesComponent implements OnInit {
  public total: number | undefined;
  public error: Error | null = null;

  constructor(public categoryList: CategoriesAdminListService, private modalService: NgbModal) { 
    this.categoryList.total$.subscribe(total => this.updateTotal(total));
    this.categoryList.error$.subscribe(error => this.updateError(error));
  }

  ngOnInit(): void {
    this.refresh()
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

  refresh(): void {
    this.total = undefined
    this.error = null;
    this.categoryList.refresh();
  }

  private updateTotal(total: number | undefined): void {
    this.total = total;
  }

  private updateError(error: Error | null): void {
    this.error = error;
  }
}
