import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faTrashAlt, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { DiagramsAdminListService } from '../diagrams-admin-list.service';
import { OperatorDashboardListService } from '../operator-dashboard-list.service';
import { Diagram, DiagramState, DiagramStateMapping } from '../types/diagram.type';

@Component({
  selector: 'app-operator-dashboard-list',
  templateUrl: './operator-dashboard-list.component.html',
  styleUrls: ['./operator-dashboard-list.component.scss']
})
export class OperatorDashboardListComponent implements OnInit {
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrashAlt;
  public diagramStateMapping = DiagramStateMapping;
  public diagramStates: DiagramState[] = Object.values(DiagramState).filter((value) => typeof value === 'string') as DiagramState[];
  public diagramState = DiagramState;

  public diagrams: Diagram[] | undefined;

  constructor(public diagramList: OperatorDashboardListService, private router: Router) { 
    this.diagramList.diagrams$.subscribe(diagrams => this.diagrams = diagrams);
  }

  ngOnInit(): void {
  }

  onAddNewDiagram(): void {
    console.log("createNewDiagram");
    this.router.navigate(['/assembly']);
  }
}
