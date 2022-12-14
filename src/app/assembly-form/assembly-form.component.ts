import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AssemblyService } from '../assembly.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Part } from '../types/part.type';
import { Diagram } from '../types/diagram.type';
import { Alert, AlertType } from '../alert';
import { DataProviderService } from '../data-provider.service';
import { REQUEST_TIMEOUT } from '../env';
import { fromPromise } from '../timed-promise';
import { OperatorDashboardListService } from '../operator-dashboard-list.service';
import { Router } from '@angular/router';

const timeoutMS = REQUEST_TIMEOUT;

@Component({
  selector: 'app-assembly-form',
  templateUrl: './assembly-form.component.html',
  styleUrls: ['./assembly-form.component.scss'],
  host: {
    class: 'flex-grow-1 flex-shrink-1 p-2 d-flex justify-content-stretch align-items-stretch',
    style: 'grid-area: main;'
  }
})
export class AssemblyFormComponent implements OnInit {
  @Input() public id: number = 0;
  @Input() public trnMode: string = 'INS';

  public processing: boolean = false;
  public alerts: Alert[] = [];
  public valid: boolean = true;
  public btnText: string = '';
  public btnClass: string = '';
  public formTitle: string = '';
  public diagram: Diagram = new Diagram();

  public base: Part[] = [];
  public blade: Part[] = [];
  public body: Part[] = [];

  public diagramForm: FormGroup = this.formBuilder.group({
    name_diag: new FormControl<null | string>(null),
    id_base: new FormControl<null | number>(null),
    id_body: new FormControl<null | number>(null),
    id_blade: new FormControl<null | number>(null),
    description: new FormControl<null | string>(null)
  });

  constructor(
    private formBuilder: FormBuilder,
    private operatorDashboardList: OperatorDashboardListService,
    private dataProvider: DataProviderService,
    private router: Router,
    private assemblyService: AssemblyService
  ) { }

  ngOnInit(): void {
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));
    
    this.assemblyService.base$.subscribe(base => {
      this.base = base ? [base] : [];
      this.diagramForm.controls['id_base'].setValue(base ? base.id_piez : null);
    });
    this.assemblyService.blade$.subscribe(blade => {
      this.blade = blade ? [blade] : [];
      this.diagramForm.controls['id_blade'].setValue(blade ? blade.id_piez : null);
    });
    this.assemblyService.body$.subscribe(body => {
      this.body = body ? [body] : [];
      this.diagramForm.controls['id_body'].setValue(body ? body.id_piez : null);
    });

    try {
      switch (this.trnMode) {
        case 'INS':
          this.btnText = 'Create';
          this.btnClass = 'btn-success';
          this.formTitle = 'Create Diagram';

          if (this.id > 0) {
            throw new Error('ID should be 0 for insert mode');
          }
          else {
            this.processing = false;
            this.alerts = [];
          }

          break;
        case 'UPD':
          this.btnText = 'Update';
          this.btnClass = 'btn-warning';
          this.formTitle = 'Update Diagram';

          if (!this.id || this.id == 0) {
            throw new Error('ID should not be null or 0 for update mode');
          }
          else {
            this.loadDiagram();
          }

          break;
        case 'DLT':
          this.btnText = 'Delete';
          this.btnClass = 'btn-danger';
          this.formTitle = 'Delete Diagram';

          if (!this.id || this.id == 0) {
            throw new Error('ID should not be null or 0 for delete mode');
          }
          else {
            this.loadDiagram();
          }

          break;
        default:
          throw new Error('Invalid transaction mode');
      }
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, true));
    }
  }

  public onSubmit(): void {
    if (this.processing || !this.valid || !this.diagramForm.valid) {
      return;
    }
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    this.exportToValues();
    switch (this.trnMode) {
      case 'INS':
        this.insertDiagram();
        break;
      case 'UPD':
        this.updateDiagram();
        break;
      case 'DLT':
        this.deleteDiagram();
        break;
      default:
        throw new Error('Invalid transaction mode');
    }
  }

  public removeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  private async loadDiagram(): Promise<void> {
    let loadDiagram = fromPromise<Diagram>(
      this.dataProvider.Diagram.getOne(this.id!),
      timeoutMS,
      new Error('Timeout loading diagram')
    );

    try {
      this.diagram = await loadDiagram;
      this.importFromValues();
      this.processing = false;
      this.alerts = [];
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, `Loading Diagram: ${(<Error>error).message}`, false, 0, true));
    }
  }

  private async insertDiagram(): Promise<void> {
    let insertDiagram = fromPromise<Diagram>(
      this.dataProvider.UserDiagram.create(this.exportToValues()),
      timeoutMS,
      new Error('Timeout inserting diagram')
    );

    try {
      this.diagram = await insertDiagram;
      this.operatorDashboardList.refresh();
      this.processing = false;
      this.router.navigate(['/operator_diagrams']);
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, `Insert: ${(<Error>error).message}`, false, 0, true));
    }
  }

  private async updateDiagram(): Promise<void> {
    let updateDiagram = fromPromise<Diagram>(
      this.dataProvider.UserDiagram.update(this.diagram.id_diag, this.diagram),
      timeoutMS,
      new Error('Timeout updating diagram')
    );

    try {
      this.diagram = await updateDiagram;
      this.operatorDashboardList.refresh();
      this.router.navigate(['/operator_diagrams']);
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, `Update: ${(<Error>error).message}`, false, 0, true));
    }
  }

  private async deleteDiagram(): Promise<void> {
    let deleteDiagram = fromPromise<number>(
      this.dataProvider.UserDiagram.remove(this.id!),
      timeoutMS,
      new Error('Timeout deleting diagram')
    );

    try {
      await deleteDiagram;
      this.operatorDashboardList.refresh();
      this.router.navigate(['/operator_diagrams']);
    }
    catch (error) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, `Delete: ${(<Error>error).message}`, false, 0, true));
    }
  }

  private importFromValues(): void {
    this.diagramForm.patchValue({
      id_diag: this.diagram.id_diag,
      name_diag: this.diagram.name_diag,
      id_base: this.diagram.id_base,
      id_body: this.diagram.id_body,
      id_blade: this.diagram.id_blade,
      description: this.diagram.description
    })
  }

  private exportToValues(): Diagram {
    this.diagram.id_diag = this.diagramForm.get('id_diag')?.value;
    this.diagram.name_diag = this.diagramForm.get('name_diag')?.value;
    this.diagram.id_base = this.diagramForm.get('id_base')?.value;
    this.diagram.id_body = this.diagramForm.get('id_body')?.value;
    this.diagram.id_blade = this.diagramForm.get('id_blade')?.value;
    this.diagram.description = this.diagramForm.get('description')?.value;
    return this.diagram;
  }

  drop(event: any) {
    this.assemblyService.drop(event);
  }

  selectDropZone(zone: number) {
    console.log(zone);
  }
}
