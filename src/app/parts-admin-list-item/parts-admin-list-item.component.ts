import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { switchMap } from 'rxjs';
import { PartFormComponent } from '../part-form/part-form.component';
import { PartsAdminListService } from '../parts-admin-list.service';
import { Category } from '../types/category.type';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-parts-admin-list-item',
  templateUrl: './parts-admin-list-item.component.html',
  styleUrls: ['./parts-admin-list-item.component.scss']
})
export class PartsAdminListItemComponent implements OnInit {
  @Input() part: Part = new Part();
  @Input() category: Category = new Category();

  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrashAlt;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public onEditPart(part: Part): void {
    const modalRef = this.modalService.open(PartFormComponent);
    modalRef.componentInstance.id = part.id_piez;
    modalRef.componentInstance.trnMode = 'UPD';
    modalRef.result.then((part: Part) => {
      if (part !== null && part !== undefined) {
        console.log(part);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  public onDeletePart(part: Part): void {
    const modalRef = this.modalService.open(PartFormComponent);
    modalRef.componentInstance.id = part.id_piez;
    modalRef.componentInstance.trnMode = 'DLT';
    modalRef.result.then((part: Part) => {
      if (part !== null && part !== undefined) {
        console.log(part);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }
}
