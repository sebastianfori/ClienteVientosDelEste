import { Inject, Injectable } from '@angular/core';
import { BaseGenericService } from '../api/base-generic.service';
import { UserDiagramsService } from '../api/user-diagrams.service';
import { DiagramFilter } from '../types/diagram-filter.type';
import { Diagram } from '../types/diagram.type';
import { BaseGenericControllerService } from './base-generic-controller.service';
import { LoginControllerService } from './login-controller.service';

@Injectable({
  providedIn: 'root'
})
export class UserDiagramsControllerService extends BaseGenericControllerService<Diagram, DiagramFilter> {
  constructor(@Inject(UserDiagramsService) protected service2: BaseGenericService<Diagram, DiagramFilter>, protected auth2: LoginControllerService) { 
    super(service2, auth2);
  }
}
