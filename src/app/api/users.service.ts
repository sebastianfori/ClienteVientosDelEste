import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserFilter } from '../types/user-filter.type';
import { User } from '../types/user.type';
import { BaseGenericService } from './base-generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseGenericService<User, UserFilter> {
  constructor(protected override http: HttpClient) {
    super(http);
    this.endpointUrl = environment.api.url + environment.api.endpoints.users;
  }
}