import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss'],
  host: {
    class: 'container-xxl gx-3 ve-layout'
  }
})
export class CategoriesAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
