import { Component, OnInit } from '@angular/core';
import { faEdit, faTrashAlt, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User, UserType, UserTypeMapping } from '../types/user.type';
import { UserFormComponent } from '../user-form/user-form.component';
import { UsersAdminListService } from '../users-admin-list.service';

@Component({
  selector: 'app-users-admin-list',
  templateUrl: './users-admin-list.component.html',
  styleUrls: ['./users-admin-list.component.scss'],
  host: {
    class: 'flex-grow-1 flex-shrink-1 p-2 d-flex justify-content-stretch align-items-stretch',
    style: 'grid-area: main;'
  }
})
export class UsersAdminListComponent implements OnInit {
  public faEdit: IconDefinition = faEdit;
  public faTrash: IconDefinition = faTrashAlt;
  public userTypeMapping = UserTypeMapping;
  public userTypes: UserType[] = Object.values(UserType).filter((value) => typeof value === 'string') as UserType[];
  
  public users: User[] | undefined;

  constructor(public userList: UsersAdminListService, private modalService: NgbModal) { 
    this.userList.users$.subscribe(users => this.users = users);
  }

  ngOnInit(): void {
  }

  onAddNewUser(): void {
    console.log("createNewUser");
    const modalRef = this.modalService.open(UserFormComponent);
    modalRef.componentInstance.id = 0;
    modalRef.componentInstance.trnMode = 'INS';
    modalRef.result.then((user: User) => {
      if (user !== null && user !== undefined) {
        console.log(user);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  onEditUser(user: User): void {
    console.log("editUser");
    const modalRef = this.modalService.open(UserFormComponent);
    modalRef.componentInstance.id = user.id_usu;
    modalRef.componentInstance.trnMode = 'UPD';
    modalRef.result.then((user: User) => {
      if (user !== null && user !== undefined) {
        console.log(user);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }

  onDeleteUser(user: User): void {
    console.log("deleteUser");
    const modalRef = this.modalService.open(UserFormComponent);
    modalRef.componentInstance.id = user.id_usu;
    modalRef.componentInstance.trnMode = 'DLT';
    modalRef.result.then((user: User) => {
      if (user !== null && user !== undefined) {
        console.log(user);
      }
    }).catch((reason) => {
      console.log("dismissed");
    });
  }
}
