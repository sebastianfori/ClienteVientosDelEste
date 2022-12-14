import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';
import { DataProviderService } from './data-provider.service';
import { UserFilter } from './types/user-filter.type';
import { User } from './types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UsersAdminListService {
  private filter: UserFilter;
  private usersSource: BehaviorSubject<User[]>;
  private totalSource: BehaviorSubject<number>;
  private errorSource: BehaviorSubject<Error | null>;
  private searchTerms: BehaviorSubject<UserFilter>;
  public users$: Observable<User[]>;
  public total$: Observable<number>;
  public error$: Observable<Error | null>;

  constructor(private dataProvider: DataProviderService) { 
    this.filter = new UserFilter();
    this.usersSource = new BehaviorSubject<User[]>([]);
    this.totalSource = new BehaviorSubject<number>(0);
    this.errorSource = new BehaviorSubject<Error | null>(null);
    this.searchTerms = new BehaviorSubject<UserFilter>(this.filter);
    this.users$ = this.usersSource.asObservable()
    this.total$ = this.totalSource.asObservable()
    this.error$ = this.errorSource.asObservable();
    this.searchTerms.pipe(
      debounceTime(300)
    ).subscribe(filter => {
      this.getUsers(filter);
      this.getTotal()
    });
  }

  search(filter: UserFilter): void {
    this.filter = filter;
    this.searchTerms.next(this.filter);
  }

  refresh(): void {
    this.searchTerms.next(this.filter);
  }

  private async getUsers(filter: UserFilter): Promise<void> {
    try {
      const users = await this.dataProvider.User.getMany(filter);
      this.usersSource.next(users);
      this.errorSource.next(null);
    }
    catch (error) {
      this.usersSource.next([]);
      this.errorSource.next((<Error>error));
    }
  }

  private async getTotal(): Promise<void> {
    try {
      const total = await this.dataProvider.User.total();
      this.totalSource.next(total);
      this.errorSource.next(null);
    }
    catch (error) {
      this.totalSource.next(0);
      this.errorSource.next((<Error>error));
    }
  }
}
