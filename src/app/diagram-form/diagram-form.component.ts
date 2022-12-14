import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert, AlertType } from '../alert';
import { DataProviderService } from '../data-provider.service';
import { DiagramsAdminListService } from '../diagrams-admin-list.service';
import { Diagram, DiagramState, DiagramStateMapping } from '../types/diagram.type';

@Component({
  selector: 'app-diagram-form',
  templateUrl: './diagram-form.component.html',
  styleUrls: ['./diagram-form.component.scss']
})
export class DiagramFormComponent implements OnInit {
  @Input() public id: number | null = null;
  @Input() public trnMode: string = 'INS';

  public diagramStateMapping = DiagramStateMapping;
  public diagramStates: DiagramState[] = Object.values(DiagramState).filter((value) => typeof value === 'string') as DiagramState[];

  public processing: boolean = false;
  public alerts: Alert[] = [];
  public valid: boolean = true;
  public btnText: string = '';
  public btnClass: string = '';
  public formTitle: string = '';
  private diagram: Diagram = new Diagram();

  public diagramForm: FormGroup = this.formBuilder.group({
    name_diag: new FormControl<null | string>(null, Validators.required),
    description: new FormControl<null | string>(null, Validators.required),
    id_base: new FormControl<null | number>(null, Validators.required),
    id_body: new FormControl<null | number>(null, Validators.required),
    id_blade: new FormControl<null | number>(null, Validators.required),
    state: new FormControl<null | DiagramState>(null, Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataProvider: DataProviderService,
    private diagramsAdminListService: DiagramsAdminListService
  ) { }

  ngOnInit(): void {
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    try {
      switch (this.trnMode) {
        case 'INS':
          this.btnText = 'Create';
          this.btnClass = 'btn-success';
          this.formTitle = 'Create Diagram';

          if (this.id) {
            throw new Error('Invalid id for insert mode.');
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

          if (!this.id) {
            throw new Error('Id should not be null for update mode.');
          }
          else {
            this.loadDiagram();
          }

          break;
        case 'DLT':
          this.btnText = 'Delete';
          this.btnClass = 'btn-danger';
          this.formTitle = 'Delete Diagram';

          if (!this.id) {
            throw new Error('ID should not be null for delete mode.');
          }
          else {
            this.loadDiagram();
          }
          break;
        default:
          throw new Error('Invalid trnMode.');
      }
    } catch (e) {
      this.processing = false;
      this.valid = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>e).message, false, 0, false));
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
        throw new Error('Invalid transaction mode.');
    }
  }

  public removeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  private async loadDiagram(): Promise<void> {
    try {
      this.diagram = await this.dataProvider.Diagram.getOne(this.id!);
      this.importFromValues();
      this.processing = false;
      this.alerts = [];
    } 
    catch (e) {
      this.processing = false;
      this.valid = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>e).message, false, 0, false));
    }
  }

  private async insertDiagram(): Promise<void> {
    try {
      await this.dataProvider.Diagram.create(this.diagram);
      this.diagramsAdminListService.refresh();
      this.activeModal.close();
    } 
    catch (e) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>e).message, false, 0, false));
    }
  }

  private async updateDiagram(): Promise<void> {
    try {
      await this.dataProvider.Diagram.update(this.diagram.id_diag, this.diagram);
      this.diagramsAdminListService.refresh();
      this.activeModal.close();
    } 
    catch (e) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>e).message, false, 0, false));
    }
  }

  private async deleteDiagram(): Promise<void> {
    try {
      await this.dataProvider.Diagram.remove(this.id!);
      this.diagramsAdminListService.refresh();
      this.activeModal.close();
    } 
    catch (e) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>e).message, false, 0, false));
    }
  }

  private importFromValues(): void {
    this.diagramForm.patchValue({
      name_diag: this.diagram.name_diag,
      description: this.diagram.description,
      id_base: this.diagram.id_base,
      id_body: this.diagram.id_body,
      id_blade: this.diagram.id_blade,
      state: this.diagram.state
    });
  }

  private exportToValues(): Diagram {
    this.diagram.name_diag = this.diagramForm.get('name_diag')?.value;
    this.diagram.description = this.diagramForm.get('description')?.value;
    this.diagram.id_base = this.diagramForm.get('id_base')?.value;
    this.diagram.id_body = this.diagramForm.get('id_body')?.value;
    this.diagram.id_blade = this.diagramForm.get('id_blade')?.value;
    this.diagram.state = this.diagramForm.get('state')?.value;
    return this.diagram;
  }
}
