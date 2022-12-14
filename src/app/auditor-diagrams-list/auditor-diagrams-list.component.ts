import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuditorDiagramsFormComponent } from '../auditor-diagrams-form/auditor-diagrams-form.component';
import { AuditorDiagramsListService } from '../auditor-diagrams-list.service';
import { Diagram, DiagramState, DiagramStateMapping } from '../types/diagram.type';

@Component({
  selector: 'app-auditor-diagrams-list',
  templateUrl: './auditor-diagrams-list.component.html',
  styleUrls: ['./auditor-diagrams-list.component.scss'],
  host: {
    class: 'flex-grow-1 flex-shrink-1 p-2 d-flex justify-content-stretch align-items-stretch',
    style: 'grid-area: main;'
  }
})
export class AuditorDiagramsListComponent implements OnInit {
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrashAlt;
  public diagramStateMapping = DiagramStateMapping;
  public diagramStates: DiagramState[] = Object.values(DiagramState).filter((value) => typeof value === 'string') as DiagramState[];
  public diagramState = DiagramState;

  public diagrams: Diagram[] | undefined;

  constructor(public diagramList: AuditorDiagramsListService, private modalService: NgbModal) { 
    this.diagramList.diagrams$.subscribe(diagrams => this.diagrams = diagrams);
  }

  ngOnInit(): void {
  }

  onEditDiagram(diagram: Diagram): void {
    console.log("editDiagram");
    const modalRef = this.modalService.open(AuditorDiagramsFormComponent);
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

}
