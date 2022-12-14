import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DiagramFilter } from '../types/diagram-filter.type';
import { Diagram } from '../types/diagram.type';
import { BaseGenericService } from './base-generic.service';

@Injectable({
  providedIn: 'root'
})
export class AuditorDiagramsService extends BaseGenericService<Diagram, DiagramFilter> {
  constructor(protected override http: HttpClient) {
    super(http);
    this.endpointUrl = environment.api.url + environment.api.endpoints.auditorDiagrams;
  }
}
