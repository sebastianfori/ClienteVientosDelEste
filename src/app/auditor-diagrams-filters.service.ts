import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuditorDiagramsListService } from './auditor-diagrams-list.service';
import { DiagramFilter } from './types/diagram-filter.type';

@Injectable({
  providedIn: 'root'
})
export class AuditorDiagramsFiltersService {
  private filterBehaviorsSubject: BehaviorSubject<DiagramFilter>;

  public filter$: Observable<DiagramFilter>;

  constructor(private diagramList: AuditorDiagramsListService) { 
    this.filterBehaviorsSubject = new BehaviorSubject<DiagramFilter>(new DiagramFilter());
    this.filter$ = this.filterBehaviorsSubject.asObservable();
  }

  public setFilter(filter: DiagramFilter): void {
    this.filterBehaviorsSubject.next(filter);
    this.diagramList.search(filter);
  }
}
