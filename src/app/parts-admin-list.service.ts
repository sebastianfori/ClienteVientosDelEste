import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, Observable, of, switchMap } from 'rxjs';
import { DataProviderService } from './data-provider.service';
import { CategoryFilter } from './types/category-filter.type';
import { Category } from './types/category.type';
import { PartFilter } from './types/part-filter.type';
import { Part } from './types/part.type';

@Injectable({
  providedIn: 'root'
})
export class PartsAdminListService {
  private filter: PartFilter;
  private partsSource: BehaviorSubject<Part[]>;
  private totalSource: BehaviorSubject<number>;
  private errorSource: BehaviorSubject<Error | null>;
  private categoriesSource: BehaviorSubject<Category[]>;
  private searchTerms: BehaviorSubject<PartFilter>;
  public parts$: Observable<Part[]>;
  public total$: Observable<number>;
  public error$: Observable<Error | null>;
  public categories$: Observable<Category[]>;

  constructor(private dataProvider: DataProviderService) { 
    this.filter = new PartFilter();
    this.partsSource = new BehaviorSubject<Part[]>([]);
    this.totalSource = new BehaviorSubject<number>(0);
    this.errorSource = new BehaviorSubject<Error | null>(null);
    this.searchTerms = new BehaviorSubject<PartFilter>(this.filter);
    this.categoriesSource = new BehaviorSubject<Category[]>([]);
    this.parts$ = this.partsSource.asObservable();
    this.total$ = this.totalSource.asObservable();
    this.error$ = this.errorSource.asObservable();
    this.searchTerms.pipe(
      debounceTime(300)
    ).subscribe(filter => {
      this.getParts(filter);
      this.getTotal();
    });
    this.categories$ = this.categoriesSource.asObservable();
  }

  search(filter: PartFilter): void {
    this.filter = filter;
    this.searchTerms.next(this.filter);
  }

  refresh(): void {
    this.searchTerms.next(this.filter);

  }

  private async getParts(filter: PartFilter): Promise<void> {
    try {
      const parts = await this.dataProvider.Part.getMany(filter);
      const categories = await this.dataProvider.Category.getMany(new CategoryFilter());
      this.partsSource.next(parts);
      this.categoriesSource.next(categories);
      this.errorSource.next(null);

    }
    catch (error) {
      this.partsSource.next([]);
      this.errorSource.next((<Error>error));
    }
  }

  private async getTotal(): Promise<void> {
    try {
      const total = await this.dataProvider.Part.total();
      this.totalSource.next(total);
      this.errorSource.next(null);
    }
    catch (error) {
      this.totalSource.next(0);
      this.errorSource.next((<Error>error));
    }
  }
}
