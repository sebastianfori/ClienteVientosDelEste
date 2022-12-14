import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, Observable } from 'rxjs';
import { DataProviderService } from './data-provider.service';
import { DiagramFilter } from './types/diagram-filter.type';
import { Diagram } from './types/diagram.type';

@Injectable({
  providedIn: 'root'
})
export class DiagramsAdminListService {
  private filter: DiagramFilter;
  private diagramsSource: BehaviorSubject<Diagram[]>;
  private totalSource: BehaviorSubject<number>;
  private errorSource: BehaviorSubject<Error | null>;
  private searchTerms: BehaviorSubject<DiagramFilter>;
  public diagrams$: Observable<Diagram[]>;
  public total$: Observable<number>;
  public error$: Observable<Error | null>;

  constructor(private dataProvider: DataProviderService) { 
    this.filter = new DiagramFilter();
    this.diagramsSource = new BehaviorSubject<Diagram[]>([]);
    this.totalSource = new BehaviorSubject<number>(0);
    this.errorSource = new BehaviorSubject<Error | null>(null);
    this.searchTerms = new BehaviorSubject<DiagramFilter>(this.filter);
    this.diagrams$ = this.diagramsSource.asObservable()
    this.total$ = this.totalSource.asObservable()
    this.error$ = this.errorSource.asObservable();
    this.searchTerms.pipe(
      debounceTime(300)
    ).subscribe(filter => {
      this.getDiagrams(filter);
      this.getTotal()
    });
  }

  search(filter: DiagramFilter): void {
    this.filter = filter;
    this.searchTerms.next(this.filter);
  }

  refresh(): void {
    this.searchTerms.next(this.filter);
  }

  private async getDiagrams(filter: DiagramFilter): Promise<void> {
    try {
      const diagrams = await this.dataProvider.Diagram.getMany(filter);
      this.diagramsSource.next(diagrams);
      this.errorSource.next(null);
    }
    catch (error) {
      this.diagramsSource.next([]);
      this.errorSource.next((<Error>error));
    }
  }

  private async getTotal(): Promise<void> {
    try {
      const total = await this.dataProvider.Diagram.total();
      this.totalSource.next(total);
      this.errorSource.next(null);
    }
    catch (error) {
      this.totalSource.next(0);
      this.errorSource.next((<Error>error));
    }
  }
}
