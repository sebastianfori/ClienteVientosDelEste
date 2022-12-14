import { Component, OnInit } from '@angular/core';
import { faFilter, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../types/user.type';
import { UserFormComponent } from '../user-form/user-form.component';
import { UsersAdminFiltersTemplateComponent } from '../users-admin-filters-template/users-admin-filters-template.component';

@Component({
  selector: 'app-users-admin-filters',
  templateUrl: './users-admin-filters.component.html',
  styleUrls: ['./users-admin-filters.component.scss'],
  host: {
    class: 've-sidebar row gx-0 d-inline-flex w-100',
  }
})
export class UsersAdminFiltersComponent implements OnInit {
  public faFilter: IconDefinition = faFilter;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  open() {
    const offcanvasRef = this.offcanvasService.open(UsersAdminFiltersTemplateComponent);
    offcanvasRef.componentInstance.name = 'Filters';
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
}
