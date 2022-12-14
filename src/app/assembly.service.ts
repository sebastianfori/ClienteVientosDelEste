import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataProviderService } from './data-provider.service';
import { Part } from './types/part.type';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Diagram } from './types/diagram.type';
import { fromPromise } from './timed-promise';
import { REQUEST_TIMEOUT } from './env';

const timeoutMS = REQUEST_TIMEOUT;

@Injectable({
  providedIn: 'root'
})
export class AssemblyService {
  private diagId: number = 0;

  private partsSource: BehaviorSubject<boolean>;
  private bladesSource: BehaviorSubject<Part[]>;
  private basesSource: BehaviorSubject<Part[]>;
  private bodiesSource: BehaviorSubject<Part[]>;
  private errorSource: BehaviorSubject<Error | null>;
  private baseSource: BehaviorSubject<Part | null>;
  private bladeSource: BehaviorSubject<Part | null>;
  private bodySource: BehaviorSubject<Part | null>;
  public bases$: Observable<Part[]>;
  public blades$: Observable<Part[]>;
  public bodies$: Observable<Part[]>;
  public error$: Observable<Error | null>;
  public base$: Observable<Part | null>;
  public blade$: Observable<Part | null>;
  public body$: Observable<Part | null>;

  constructor(private dataProvider: DataProviderService) { 
    this.partsSource = new BehaviorSubject<boolean>(true);
    this.errorSource = new BehaviorSubject<Error | null>(null);
    this.basesSource = new BehaviorSubject<Part[]>([]);
    this.bladesSource = new BehaviorSubject<Part[]>([]);
    this.bodiesSource = new BehaviorSubject<Part[]>([]);
    this.baseSource = new BehaviorSubject<Part | null>(null);
    this.bladeSource = new BehaviorSubject<Part | null>(null);
    this.bodySource = new BehaviorSubject<Part | null>(null);
    this.bases$ = this.basesSource.asObservable();
    this.blades$ = this.bladesSource.asObservable();
    this.bodies$ = this.bodiesSource.asObservable();
    this.error$ = this.errorSource.asObservable();
    this.base$ = this.baseSource.asObservable();
    this.blade$ = this.bladeSource.asObservable();
    this.body$ = this.bodySource.asObservable();
    this.partsSource.subscribe(() => {
      this.getParts();
    });
  }

  refresh(): void {
    this.partsSource.next(true);
  }

  private async getParts(): Promise<void> {
    try {
      const parts = await this.dataProvider.Part.getAll();
      this.basesSource.next(parts.filter(part => part.id_cat === 1));
      this.bladesSource.next(parts.filter(part => part.id_cat === 2));
      this.bodiesSource.next(parts.filter(part => part.id_cat === 3));
      this.errorSource.next(null);
    }
    catch (error) {
      this.basesSource.next([]);
      this.bladesSource.next([]);
      this.bodiesSource.next([]);
      this.errorSource.next((<Error>error));
    }
  }

  drop(event: CdkDragDrop<Part[]>) {
    console.log(event);
    if (event.previousContainer.id === 'basesList' && event.container.id === 'baseList') {
      event.previousContainer.data[event.previousIndex]
      this.baseSource.next(event.previousContainer.data[event.previousIndex]);
    }
    if (event.previousContainer.id === 'bladesList' && event.container.id === 'bladeList') {
      event.previousContainer.data[event.previousIndex]
      this.bladeSource.next(event.previousContainer.data[event.previousIndex]);
    }
    if (event.previousContainer.id === 'bodiesList' && event.container.id === 'bodyList') {
      event.previousContainer.data[event.previousIndex]
      this.bodySource.next(event.previousContainer.data[event.previousIndex]);
    }
  }
}

