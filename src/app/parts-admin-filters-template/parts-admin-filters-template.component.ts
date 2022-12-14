import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parts-admin-filters-template',
  templateUrl: './parts-admin-filters-template.component.html',
  styleUrls: ['./parts-admin-filters-template.component.scss']
})
export class PartsAdminFiltersTemplateComponent implements OnInit {
  @Input() name: string = '';

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas) {
  }

  ngOnInit(): void {
  }

}
