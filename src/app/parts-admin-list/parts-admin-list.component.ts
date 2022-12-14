import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartFormComponent } from '../part-form/part-form.component';
import { PartsAdminListService } from '../parts-admin-list.service';
import { Category } from '../types/category.type';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-parts-admin-list',
  templateUrl: './parts-admin-list.component.html',
  styleUrls: ['./parts-admin-list.component.scss'],
  host: {
    class: 'flex-grow-1 flex-shrink-1 p-2 d-flex justify-content-stretch align-items-stretch',
    style: 'grid-area: main;'
  }
})
export class PartsAdminListComponent implements OnInit {
  public parts: Part[] | undefined;
  public categories: Category[] = [];

  constructor(
    public partList: PartsAdminListService,
    private modalService: NgbModal
  ) { 
  }

  ngOnInit(): void {
    this.partList.parts$.subscribe(parts => this.parts = parts);
    this.partList.categories$.subscribe(categories => this.categories = categories);
  }
  
  onAddNewPart(): void {
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

  getPartCategory(part: Part): Category {
    return this.categories.find(category => category.id_cat === part.id_cat) || new Category();
  }

}
