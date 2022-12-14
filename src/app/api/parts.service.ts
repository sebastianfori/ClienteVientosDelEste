import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { fromPromise } from '../timed-promise';
import { APIPayload } from '../types/api-payload.type';
import { PartFilter } from '../types/part-filter.type';
import { Part } from '../types/part.type';
import { BaseGenericService } from './base-generic.service';

@Injectable({
  providedIn: 'root'
})
export class PartsService extends BaseGenericService<Part, PartFilter> {
  constructor(protected override http: HttpClient) {
    super(http);
    this.endpointUrl = environment.api.url + environment.api.endpoints.parts;
  }
}