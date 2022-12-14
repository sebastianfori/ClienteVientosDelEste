import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataProviderService } from './data-provider.service';
import { Part } from './types/part.type';

@Injectable({
  providedIn: 'root'
})
export class AuditorDiagramsFormService {
  private diagId: number = 0;

  private partsSource: BehaviorSubject<Part[]>;
  private errorSource: BehaviorSubject<Error | null>;
  private searchTerms: BehaviorSubject<boolean>;
  public parts$: Observable<Part[]>;
  public error$: Observable<Error | null>;
  
  constructor(private dataProvider: DataProviderService) { 
    this.partsSource = new BehaviorSubject<Part[]>([]);
    this.errorSource = new BehaviorSubject<Error | null>(null);
    this.searchTerms = new BehaviorSubject<boolean>(true);
    this.parts$ = this.partsSource.asObservable();
    this.error$ = this.errorSource.asObservable();
    this.searchTerms.subscribe(() => {
      this.getParts();
    });
  }

  refresh(): void {
    this.searchTerms.next(true);
  }

  private async getParts(): Promise<void> {
    try {
      const parts = await this.dataProvider.Part.getAll();
      this.partsSource.next(parts);
      this.errorSource.next(null);
    } catch (error) {
      this.partsSource.next([]);
      this.errorSource.next((<Error>error));
    }
  }
}
