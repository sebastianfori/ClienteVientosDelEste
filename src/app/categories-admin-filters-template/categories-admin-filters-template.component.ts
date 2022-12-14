import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories-admin-filters-template',
  templateUrl: './categories-admin-filters-template.component.html',
  styleUrls: ['./categories-admin-filters-template.component.scss']
})
export class CategoriesAdminFiltersTemplateComponent implements OnInit {
  @Input() name: string = '';

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas) {
  }

  ngOnInit(): void {
  }

}
