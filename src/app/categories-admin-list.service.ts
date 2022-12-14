import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, Observable, of, switchMap, defer, from } from 'rxjs';
import { DataProviderService } from './data-provider.service';
import { CategoryFilter } from './types/category-filter.type';
import { Category } from './types/category.type';

@Injectable({
  providedIn: 'root'
})
export class CategoriesAdminListService {
  private filter: CategoryFilter;
  private categoriesSource: BehaviorSubject<Category[]>;
  private totalSource: BehaviorSubject<number>;
  private errorSource: BehaviorSubject<Error | null>;
  private searchTerms: BehaviorSubject<CategoryFilter>;
  public categories$: Observable<Category[]>;
  public total$: Observable<number>;
  public error$: Observable<Error | null>;

  constructor(private dataProvider: DataProviderService) { 
    this.filter = new CategoryFilter();
    this.categoriesSource = new BehaviorSubject<Category[]>([]);
    this.totalSource = new BehaviorSubject<number>(0);
    this.errorSource = new BehaviorSubject<Error | null>(null);
    this.searchTerms = new BehaviorSubject<CategoryFilter>(this.filter);
    this.categories$ = this.categoriesSource.asObservable();
    this.total$ = this.totalSource.asObservable()
    this.error$ = this.errorSource.asObservable();
    this.searchTerms.pipe(
      debounceTime(300)
    ).subscribe(filter => {
      this.getCategories(filter);
      this.getTotal();
    });
  }

  search(filter: CategoryFilter): void {
    this.filter = filter;
    this.searchTerms.next(this.filter);
  }

  refresh(): void {
    this.searchTerms.next(this.filter);
  }

  private async getCategories(filter: CategoryFilter): Promise<void> {
    try {
      const categories = await this.dataProvider.Category.getMany(filter);
      this.categoriesSource.next(categories);
      this.errorSource.next(null);
    }
    catch (error) {
      this.categoriesSource.next([]);
      this.errorSource.next((<Error>error));
    }
  }

  private async getTotal(): Promise<void> {
    try {
      const total = await this.dataProvider.Category.total();
      this.totalSource.next(total);
      this.errorSource.next(null);
    }
    catch (error) {
      this.totalSource.next(0);
      this.errorSource.next((<Error>error));
    }
  }
}
