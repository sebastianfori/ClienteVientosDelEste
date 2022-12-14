import { Inject, Injectable } from '@angular/core';
import { BaseGenericService } from '../api/base-generic.service';
import { PartsService } from '../api/parts.service';
import { PartFilter } from '../types/part-filter.type';
import { Part } from '../types/part.type';
import { BaseGenericControllerService } from './base-generic-controller.service';
import { LoginControllerService } from './login-controller.service';

@Injectable({
  providedIn: 'root'
})
export class PartsControllerService extends BaseGenericControllerService<Part, PartFilter> {
  constructor(@Inject(PartsService) protected service2: BaseGenericService<Part, PartFilter>, protected auth2: LoginControllerService) { 
    super(service2, auth2);
  }
}