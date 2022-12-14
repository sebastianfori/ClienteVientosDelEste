import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrls: ['./users-admin.component.scss'],
  host: {
    class: 'container-xxl gx-3 ve-layout'
  }
})
export class UsersAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
