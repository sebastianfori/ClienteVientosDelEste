import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OperatorDashboardListService } from './operator-dashboard-list.service';
import { DiagramFilter } from './types/diagram-filter.type';

@Injectable({
  providedIn: 'root'
})
export class OperatorDashboardFiltersService {
  private filterBehaviorsSubject: BehaviorSubject<DiagramFilter>;

  public filter$: Observable<DiagramFilter>;

  constructor(private diagramList: OperatorDashboardListService) { 
    this.filterBehaviorsSubject = new BehaviorSubject<DiagramFilter>(new DiagramFilter());
    this.filter$ = this.filterBehaviorsSubject.asObservable();
  }

  public setFilter(filter: DiagramFilter): void {
    this.filterBehaviorsSubject.next(filter);
    this.diagramList.search(filter);
  }
}
