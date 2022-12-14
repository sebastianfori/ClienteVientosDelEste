import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagrams-admin',
  templateUrl: './diagrams-admin.component.html',
  styleUrls: ['./diagrams-admin.component.scss'],
  host: {
    class: 'container-xxl gx-3 ve-layout'
  }
})
export class DiagramsAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
