import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiagramFormComponent } from '../diagram-form/diagram-form.component';
import { DiagramsAdminListService } from '../diagrams-admin-list.service';
import { Diagram, DiagramState, DiagramStateMapping } from '../types/diagram.type';

@Component({
  selector: 'app-diagrams-admin-list',
  templateUrl: './diagrams-admin-list.component.html',
  styleUrls: ['./diagrams-admin-list.component.scss'],
  host: {
    class: 'flex-grow-1 flex-shrink-1 p-2 d-flex justify-content-stretch align-items-stretch',
    style: 'grid-area: main;'
  }
})
export class DiagramsAdminListComponent implements OnInit {
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrashAlt;
  public diagramStateMapping = DiagramStateMapping;
  public diagramStates: DiagramState[] = Object.values(DiagramState).filter((value) => typeof value === 'string') as DiagramState[];

  public diagrams: Diagram[] | undefined;

  constructor(public diagramList: DiagramsAdminListService, private modalService: NgbModal) { 
    this.diagramList.diagrams$.subscribe(diagrams => this.diagrams = diagrams);
  }

  ngOnInit(): void {
  }

  onAddNewDiagram(): void {
    console.log("createNewDiagram");
    const modalRef = this.modalService.open(DiagramFormComponent);
    modalRef.componentInstance.id = 0;
    modalRef.componentInstance.trnMode = 'INS';
    modalRef.result.then((diagram: Diagram) => {
      if (diagram !== null && diagram !== undefined) {
        console.log(diagram);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  onEditDiagram(diagram: Diagram): void {
    console.log("editDiagram");
    const modalRef = this.modalService.open(DiagramFormComponent);
    modalRef.componentInstance.id = diagram.id_diag;
    modalRef.componentInstance.trnMode = 'UPD';
    modalRef.result.then((diagram: Diagram) => {
      if (diagram !== null && diagram !== undefined) {
        console.log(diagram);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  onDeleteDiagram(diagram: Diagram): void {
    console.log("deleteDiagram");
    const modalRef = this.modalService.open(DiagramFormComponent);
    modalRef.componentInstance.id = diagram.id_diag;
    modalRef.componentInstance.trnMode = 'DEL';
    modalRef.result.then((diagram: Diagram) => {
      if (diagram !== null && diagram !== undefined) {
        console.log(diagram);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }
}
