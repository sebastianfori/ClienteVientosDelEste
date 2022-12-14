import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-diagrams-admin-filters-template',
  templateUrl: './diagrams-admin-filters-template.component.html',
  styleUrls: ['./diagrams-admin-filters-template.component.scss']
})
export class DiagramsAdminFiltersTemplateComponent implements OnInit {
  @Input() name: string = '';

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas) {
  }

  ngOnInit(): void {
  }

}
