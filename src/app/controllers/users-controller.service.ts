import { Injectable } from '@angular/core';
import { UsersService } from '../api/users.service';
import { UserFilter } from '../types/user-filter.type';
import { User } from '../types/user.type';
import { BaseGenericControllerService } from './base-generic-controller.service';
import { LoginControllerService } from './login-controller.service';

@Injectable({
  providedIn: 'root'
})
export class UsersControllerService extends BaseGenericControllerService<User, UserFilter> {
  constructor(protected service2: UsersService, protected auth2: LoginControllerService) { 
    super(service2, auth2);
  }
}