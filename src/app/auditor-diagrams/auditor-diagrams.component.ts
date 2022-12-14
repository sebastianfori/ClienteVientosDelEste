import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditorDiagramsListService } from '../auditor-diagrams-list.service';

@Component({
  selector: 'app-auditor-diagrams',
  templateUrl: './auditor-diagrams.component.html',
  styleUrls: ['./auditor-diagrams.component.scss'],
  host: {
    class: 'container-fluid flex-grow-1 d-flex justify-content-stretch align-items-stretch'
  }
})
export class AuditorDiagramsComponent implements OnInit {
  public total: number | undefined;
  public error: Error | null = null;

  constructor(
    public diagramsList: AuditorDiagramsListService, 
    private router: Router
  ) { 
    this.diagramsList.total$.subscribe(total => this.updateTotal(total));
    this.diagramsList.error$.subscribe(error => this.updateError(error));
  }

  ngOnInit(): void {
    this.refresh();
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
