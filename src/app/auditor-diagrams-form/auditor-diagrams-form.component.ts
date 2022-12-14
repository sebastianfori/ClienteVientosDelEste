import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert, AlertType } from '../alert';
import { AuditorDiagramsFormService } from '../auditor-diagrams-form.service';
import { AuditorDiagramsListService } from '../auditor-diagrams-list.service';
import { DataProviderService } from '../data-provider.service';
import { REQUEST_TIMEOUT } from '../env';
import { fromPromise } from '../timed-promise';
import { Diagram, DiagramState } from '../types/diagram.type';
import { Part } from '../types/part.type';

const timeoutMS = REQUEST_TIMEOUT;

@Component({
  selector: 'app-auditor-diagrams-form',
  templateUrl: './auditor-diagrams-form.component.html',
  styleUrls: ['./auditor-diagrams-form.component.scss']
})
export class AuditorDiagramsFormComponent implements OnInit {
  @Input() public id: number | null = null;

  public processing: boolean = false;
  public alerts: Alert[] = [];
  public valid: boolean = true;
  private diagram: Diagram = new Diagram();
  public base: Part = new Part();
  public blade: Part = new Part();
  public body: Part = new Part();

  public diagramForm: FormGroup = this.formBuilder.group({
    name_diag: new FormControl<null | string>(null),
    id_base: new FormControl<null | number>(null),
    id_body: new FormControl<null | number>(null),
    id_blade: new FormControl<null | number>(null),
    description: new FormControl<null | string>(null)
  });


  constructor(
    private formBuilder: FormBuilder,
    private dataProvider: DataProviderService,
    public activeModal: NgbActiveModal,
    private diagramsService: AuditorDiagramsFormService,
    private auditorDiagramsListService: AuditorDiagramsListService
  ) { }

  ngOnInit(): void {
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    try {
      if (!this.id) {
        throw new Error('ID should not be null for update mode.');
      }
      else {
        this.loadDiagram();
      }
    } catch (error) {
      this.valid = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
    }
  }

  public onApprove(): void {
    if (this.processing || !this.valid || !this.diagramForm.valid) {
      return;
    }
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));
    
    this.exportToValues();
    this.diagram.state = DiagramState.Aprobado;
    this.updateDiagram();
  }

  public onReject(): void {
    if (this.processing || !this.valid || !this.diagramForm.valid) {
      return;
    }
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));
    
    this.exportToValues();
    this.diagram.state = DiagramState.Rechazado;
    this.updateDiagram();
  }

  public removeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  private async loadDiagram(): Promise<void> {
    let loadDiagram = fromPromise<Diagram>(
      new Promise<Diagram>(async (resolve, reject) => {
        try {
          let diagram = await this.dataProvider.AuditorDiagram.getOne(this.id!);
          let parts = await Promise.all([
            this.dataProvider.Part.getOne(diagram.id_base),
            this.dataProvider.Part.getOne(diagram.id_body),
            this.dataProvider.Part.getOne(diagram.id_blade)
          ])
          this.base = parts.filter(p => p.id_piez === diagram.id_base)[0] ?? new Part();
          this.body = parts.filter(p => p.id_piez === diagram.id_body)[0] ?? new Part();
          this.blade = parts.filter(p => p.id_piez === diagram.id_blade)[0] ?? new Part();
          resolve(diagram);
        }
        catch (error) {
          reject(error);
        }
      }),
      timeoutMS,
      new Error('Timeout loading base.')
    );

    try {
      this.diagram = await loadDiagram;
      console.log(this.diagram);
      this.importFromValues();
      this.processing = false;
      this.alerts = [];
    } catch (error) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
      this.valid = false;
    }
  }


  private async updateDiagram(): Promise<void> {
    let updateDiagram = fromPromise<Diagram>(
      this.dataProvider.AuditorDiagram.update(this.diagram.id_diag, this.diagram),
      timeoutMS,
      new Error('Timeout updating diagram.')
    );

    try {
      this.diagram = await updateDiagram;
      this.auditorDiagramsListService.refresh();
      this.activeModal.close();
    } catch (error) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
    }
  }

  private importFromValues(): void {
    this.diagramForm.patchValue({
      name_diag: this.diagram.name_diag,
      id_base: this.diagram.id_base,
      id_body: this.diagram.id_body,
      id_blade: this.diagram.id_blade,
      description: this.diagram.description
    });
  }

  private exportToValues(): void {
    this.diagram.name_diag = this.diagramForm.get('name_diag')?.value;
    this.diagram.id_base = this.diagramForm.get('id_base')?.value;
    this.diagram.id_body = this.diagramForm.get('id_body')?.value;
    this.diagram.id_blade = this.diagramForm.get('id_blade')?.value;
    this.diagram.description = this.diagramForm.get('description')?.value;
  }
}
