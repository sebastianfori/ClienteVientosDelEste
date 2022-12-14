import { Inject, Injectable } from '@angular/core';
import { AuditorDiagramsService } from '../api/auditor-diagrams.service';
import { BaseGenericService } from '../api/base-generic.service';
import { DiagramFilter } from '../types/diagram-filter.type';
import { Diagram } from '../types/diagram.type';
import { BaseGenericControllerService } from './base-generic-controller.service';
import { LoginControllerService } from './login-controller.service';

@Injectable({
  providedIn: 'root'
})
export class AuditorDiagramsControllerService extends BaseGenericControllerService<Diagram, DiagramFilter> {
  constructor(@Inject(AuditorDiagramsService) protected service2: BaseGenericService<Diagram, DiagramFilter>, protected auth2: LoginControllerService) { 
    super(service2, auth2);
  }
}
