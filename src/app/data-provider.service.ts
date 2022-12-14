import { Injectable } from '@angular/core';
import { LoginControllerService } from './controllers/login-controller.service';
import { UsersControllerService } from './controllers/users-controller.service';
import { CategoriesControllerService } from './controllers/categories-controller.service';
import { DiagramsControllerService } from './controllers/diagrams-controller.service';
import { PartsControllerService } from './controllers/parts-controller.service';
import { UserDiagramsControllerService } from './controllers/user-diagrams-controller.service';
import { AuditorDiagramsControllerService } from './controllers/auditor-diagrams-controller.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(
    public User: UsersControllerService,
    public Category: CategoriesControllerService,
    public Diagram: DiagramsControllerService,
    public Part: PartsControllerService,
    public UserDiagram: UserDiagramsControllerService,
    public AuditorDiagram: AuditorDiagramsControllerService,
    public Login: LoginControllerService
  ) { }
}
