import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-operator-dashboard-filters-template',
  templateUrl: './operator-dashboard-filters-template.component.html',
  styleUrls: ['./operator-dashboard-filters-template.component.scss']
})
export class OperatorDashboardFiltersTemplateComponent implements OnInit {
  @Input() name: string = '';

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas) {
  }

  ngOnInit(): void {
  }

}
