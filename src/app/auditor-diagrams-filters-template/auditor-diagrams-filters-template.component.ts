import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auditor-diagrams-filters-template',
  templateUrl: './auditor-diagrams-filters-template.component.html',
  styleUrls: ['./auditor-diagrams-filters-template.component.scss']
})
export class AuditorDiagramsFiltersTemplateComponent implements OnInit {
  @Input() name: string = '';

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas
  ) { }

  ngOnInit(): void {
  }

}
