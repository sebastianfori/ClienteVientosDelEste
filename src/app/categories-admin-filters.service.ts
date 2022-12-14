import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoriesAdminListService } from './categories-admin-list.service';
import { CategoryFilter } from './types/category-filter.type';

@Injectable({
  providedIn: 'root'
})
export class CategoriesAdminFiltersService {
  private filterBehaviorsSubject: BehaviorSubject<CategoryFilter>;

  public filter$: Observable<CategoryFilter>;

  constructor(private categoryList: CategoriesAdminListService) {
    this.filterBehaviorsSubject = new BehaviorSubject<CategoryFilter>(new CategoryFilter());
    this.filter$ = this.filterBehaviorsSubject.asObservable();
  }

  public setFilter(filter: CategoryFilter): void {
    this.filterBehaviorsSubject.next(filter);
    this.categoryList.search(filter);
  }
}
