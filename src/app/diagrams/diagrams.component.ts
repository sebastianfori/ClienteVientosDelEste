import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiagramFormComponent } from '../diagram-form/diagram-form.component';
import { DiagramsAdminListService } from '../diagrams-admin-list.service';
import { Diagram } from '../types/diagram.type';

@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss'],
  host: {
    class: 'container-fluid flex-grow-1 d-flex justify-content-stretch align-items-stretch'
  }
})
export class DiagramsComponent implements OnInit {
  public total: number | undefined;
  public error: Error | null = null;

  constructor(public diagramsList: DiagramsAdminListService, private modalService: NgbModal) { 
    this.diagramsList.total$.subscribe(total => this.updateTotal(total));
    this.diagramsList.error$.subscribe(error => this.updateError(error));
  }

  ngOnInit(): void {
    this.refresh();
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

  refresh(): void {
    this.total = undefined;
    this.error = null;
    this.diagramsList.refresh();
  }

  private updateTotal(total: number | undefined): void {
    this.total = total;
  }

  private updateError(error: Error | null): void {
    this.error = error;
  }
}
