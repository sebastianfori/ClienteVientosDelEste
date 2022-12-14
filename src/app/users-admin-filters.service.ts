import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserFilter } from './types/user-filter.type';
import { UsersAdminListService } from './users-admin-list.service';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminFiltersService {
  private filterBehaviorsSubject: BehaviorSubject<UserFilter>;

  public filter$: Observable<UserFilter>;

  constructor(private userList: UsersAdminListService) { 
    this.filterBehaviorsSubject = new BehaviorSubject<UserFilter>(new UserFilter());
    this.filter$ = this.filterBehaviorsSubject.asObservable();
  }

  public setFilter(filter: UserFilter): void {
    this.filterBehaviorsSubject.next(filter);
    this.userList.search(filter);
  }
}
