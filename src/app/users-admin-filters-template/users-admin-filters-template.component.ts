import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-admin-filters-template',
  templateUrl: './users-admin-filters-template.component.html',
  styleUrls: ['./users-admin-filters-template.component.scss']
})
export class UsersAdminFiltersTemplateComponent implements OnInit {
  @Input() name: string = '';

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas) {
  }

  ngOnInit(): void {
  }

}
