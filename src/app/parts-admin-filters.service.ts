import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PartsAdminListService } from './parts-admin-list.service';
import { PartFilter } from './types/part-filter.type';

@Injectable({
  providedIn: 'root'
})
export class PartsAdminFiltersService {
  private filterBehaviorsSubject: BehaviorSubject<PartFilter>;

  public filter$: Observable<PartFilter>;

  constructor(private partList: PartsAdminListService) { 
    this.filterBehaviorsSubject = new BehaviorSubject<PartFilter>(new PartFilter());
    this.filter$ = this.filterBehaviorsSubject.asObservable();
  }

  public setFilter(filter: PartFilter): void {
    this.filterBehaviorsSubject.next(filter);
    this.partList.search(filter);
  }
}
