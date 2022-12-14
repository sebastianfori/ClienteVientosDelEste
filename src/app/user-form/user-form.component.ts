import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert, AlertType } from '../alert';
import { DataProviderService } from '../data-provider.service';
import { REQUEST_TIMEOUT } from '../env';
import { fromPromise } from '../timed-promise';
import { User, UserType, UserTypeMapping } from '../types/user.type';
import { UsersAdminListService } from '../users-admin-list.service';

const timeoutMS = REQUEST_TIMEOUT

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() public id: number | null = null;
  @Input() public trnMode: string = 'INS';

  public userTypeMapping = UserTypeMapping;
  public userTypes: UserType[] = Object.values(UserType).filter(x => typeof x === 'string') as UserType[];

  public processing: boolean = false;
  public alerts: Alert[] = [];
  public valid: boolean = true;
  public btnText: string = '';
  public btnClass: string = '';
  public formTitle: string = '';
  private user: User = new User();

  public userForm: FormGroup = this.formBuilder.group({
    nick_usu: new FormControl<null | string>(null, Validators.required),
    mail_usu: new FormControl<null | string>(null, Validators.required),
    password: new FormControl<null | string>(null),
    type: new FormControl<null | UserType>(null, Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataProvider: DataProviderService,
    private usersAdminListService: UsersAdminListService
  ) { }

  ngOnInit(): void {
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    try {
      switch (this.trnMode) {
        case 'INS':
          this.btnText = 'Create';
          this.btnClass = 'btn-success';
          this.formTitle = 'Create User';

          if (this.id) {
            throw new Error('Invalid id for insert mode.');
          }
          else {
            this.processing = false;
            this.alerts = [];
          }

          break;
        case 'UPD':
          this.btnText = 'Update';
          this.btnClass = 'btn-warning';
          this.formTitle = 'Update User';

          if (!this.id) {
            throw new Error('ID should not be null for update mode');
          }
          else {
            this.loadUser();
          }

          break;
        case 'DLT':
          this.btnText = 'Delete';
          this.btnClass = 'btn-danger';
          this.formTitle = 'Delete User';

          if (!this.id) {
            throw new Error('ID should not be null for delete mode');
          }
          else {
            this.loadUser();
          }
          break;
        default:
          throw new Error('Invalid transaction mode.');
      }
    }
    catch (error) {
      this.processing = false;
      this.valid = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
    }
  }

  public onSubmit() {
    if (this.processing || !this.valid || !this.userForm.valid) {
      return;
    }
    this.processing = true
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    this.exportToValues();
    switch (this.trnMode) {
      case 'INS':
        this.insertUser();
        break;
      case 'UPD':
        this.updateUser();
        break;
      case 'DLT':
        this.deleteUser();
        break;
      default:
        throw new Error('Invalid transaction mode.');
    }
  }

  public removeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  private async loadUser() {
    let loadUser = fromPromise<User>(
      this.dataProvider.User.getOne(this.id!),
      timeoutMS,
      new Error('Timeout loading user.')
    );

    try {
      this.user = await loadUser;
      this.importFromValues();
      this.processing = false;
      this.alerts = [];
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
      this.valid = false;
    }
  }

  private async insertUser() {
    let insertUser = fromPromise<User>(
      this.dataProvider.User.create(this.user),
      timeoutMS,
      new Error('Timeout inserting user.')
    );

    try {
      this.user = await insertUser;
      this.usersAdminListService.refresh();
      this.activeModal.close();
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
    }
  }

  private async updateUser() {
    let updateUser = fromPromise<User>(
      this.dataProvider.User.update(this.user.id_usu!, this.user),
      timeoutMS,
      new Error('Timeout updating user.')
    );

    try {
      this.user = await updateUser;
      this.usersAdminListService.refresh();
      this.activeModal.close(this.user);
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
    }
  }

  private async deleteUser() {
    let deleteUser = fromPromise<number>(
      this.dataProvider.User.remove(this.id!),
      timeoutMS,
      new Error('Timeout deleting user.')
    );

    try {
      await deleteUser;
      this.usersAdminListService.refresh();
      this.activeModal.close();
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
    }
  }

  private importFromValues(): void {
    this.userForm.patchValue({
      nick_usu: this.user.nick_usu,
      mail_usu: this.user.mail_usu,
      password: null,
      type: this.user.type,
    });
  }

  private exportToValues(): User {
    this.user.nick_usu = this.userForm.get('nick_usu')?.value;
    this.user.mail_usu = this.userForm.get('mail_usu')?.value;
    this.user.password = this.userForm.get('password')?.value;
    this.user.type = this.userForm.get('type')?.value;
    return this.user;
  }
}