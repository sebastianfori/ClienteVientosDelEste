import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-admin',
  templateUrl: './parts-admin.component.html',
  styleUrls: ['./parts-admin.component.scss'],
  host: {
    class: 'container-xxl gx-3 ve-layout'
  }
})
export class PartsAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
