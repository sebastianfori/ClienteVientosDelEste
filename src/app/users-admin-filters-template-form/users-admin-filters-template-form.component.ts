import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserFilter } from '../types/user-filter.type';
import { UserType, UserTypeMapping } from '../types/user.type';
import { UsersAdminFiltersService } from '../users-admin-filters.service';

@Component({
  selector: 'app-users-admin-filters-template-form',
  templateUrl: './users-admin-filters-template-form.component.html',
  styleUrls: ['./users-admin-filters-template-form.component.scss']
})
export class UsersAdminFiltersTemplateFormComponent implements OnInit {
  public userTypeMapping = UserTypeMapping;
  public userTypes: UserType[] = Object.values(UserType).filter((value) => typeof value === 'string') as UserType[];

  public filterForm: FormGroup = this.formBuilder.group({
    id_usu: new FormControl<null | number>(null),
    nick_usu: new FormControl<null | string>(null),
    mail_usu: new FormControl<null | string>(null),
    type: new FormControl<null | UserType>(null)
  });


  constructor(
    private formBuilder: FormBuilder,
    private usersAdminFilters: UsersAdminFiltersService
  ) { }

  ngOnInit(): void {
    this.usersAdminFilters.filter$.subscribe((filter: UserFilter) => {
      this.filterForm.patchValue({
        id_usu: filter.id_usu,
        nick_usu: filter.nick_usu,
        mail_usu: filter.mail_usu,
        type: filter.type
      });
    });
  }

  public onFilterChanged(): void {
    this.updateFilters();
  }

  private updateFilters(): void {
    let userFilter = new UserFilter();
    userFilter.id_usu = this.filterForm.get('id_usu')?.value;
    userFilter.nick_usu = this.filterForm.get('nick_usu')?.value;
    userFilter.mail_usu = this.filterForm.get('mail_usu')?.value;
    userFilter.type = this.filterForm.get('type')?.value;
    this.usersAdminFilters.setFilter(userFilter);
  }
}
