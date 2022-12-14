import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DiagramsAdminListService } from '../diagrams-admin-list.service';
import { OperatorDashboardListService } from '../operator-dashboard-list.service';

@Component({
  selector: 'app-operator-dashboard',
  templateUrl: './operator-dashboard.component.html',
  styleUrls: ['./operator-dashboard.component.scss'],
  host: {
    class: 'container-fluid flex-grow-1 d-flex justify-content-stretch align-items-stretch'
  }
})
export class OperatorDashboardComponent implements OnInit {
  public total: number | undefined;
  public error: Error | null = null;

  constructor(
    public diagramsList: OperatorDashboardListService, 
    private router: Router
  ) {     
    this.diagramsList.total$.subscribe(total => this.updateTotal(total));
    this.diagramsList.error$.subscribe(error => this.updateError(error));
  }

  ngOnInit(): void {
    this.refresh();
  }

  createNewDiagram(): void {
    this.router.navigate(['/assembly']);
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
