import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DiagramsAdminListService } from './diagrams-admin-list.service';
import { DiagramFilter } from './types/diagram-filter.type';

@Injectable({
  providedIn: 'root'
})
export class DiagramsAdminFiltersService {
  private filterBehaviorsSubject: BehaviorSubject<DiagramFilter>;

  public filter$: Observable<DiagramFilter>;

  constructor(private diagramList: DiagramsAdminListService) { 
    this.filterBehaviorsSubject = new BehaviorSubject<DiagramFilter>(new DiagramFilter());
    this.filter$ = this.filterBehaviorsSubject.asObservable();
  }

  public setFilter(filter: DiagramFilter): void {
    this.filterBehaviorsSubject.next(filter);
    this.diagramList.search(filter);
  }
}
