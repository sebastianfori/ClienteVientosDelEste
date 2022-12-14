import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../types/user.type';
import { UserFormComponent } from '../user-form/user-form.component';
import { UsersAdminListService } from '../users-admin-list.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  host: {
    class: 'container-fluid flex-grow-1 d-flex justify-content-stretch align-items-stretch'
  }
})
export class UsersComponent implements OnInit {
  public total: number | undefined;
  public error: Error | null = null;

  constructor(public userList: UsersAdminListService, private modalService: NgbModal) { 
    this.userList.total$.subscribe(total => this.updateTotal(total));
    this.userList.error$.subscribe(error => this.updateError(error));
  }

  ngOnInit(): void {
    this.refresh();
  }

  createNewUser(): void {
    console.log("createNewUser");
    const modalRef = this.modalService.open(UserFormComponent);
    modalRef.componentInstance.id = null;
    modalRef.componentInstance.trnMode = 'INS';
    modalRef.result.then((user: User) => {
      if (user !== null && user !== undefined) {
        console.log(user);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  refresh(): void {
    this.total = undefined;
    this.error = null;
    this.userList.refresh();
  }

  private updateTotal(total: number | undefined): void {
    this.total = total;
  }

  private updateError(error: Error | null): void {
    this.error = error;
  }
}
