import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartFormComponent } from '../part-form/part-form.component';
import { PartsAdminListService } from '../parts-admin-list.service';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
  host: {
    class: 'container-fluid flex-grow-1 d-flex justify-content-stretch align-items-stretch'
  }
})
export class PartsComponent implements OnInit {
  public total: number | undefined;
  public error: Error | null = null;

  constructor(public partList: PartsAdminListService, private modalService: NgbModal) { 
    this.partList.total$.subscribe(total => this.updateTotal(total));
    this.partList.error$.subscribe(error => this.updateError(error));
  }

  ngOnInit(): void {
    this.refresh();
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

  refresh(): void {
    this.total = undefined;
    this.error = null;
    this.partList.refresh();
  }

  private updateTotal(total: number | undefined): void {
    this.total = total;
  }

  private updateError(error: Error | null): void {
    this.error = error;
  }
}
