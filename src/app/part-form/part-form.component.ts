import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert, AlertType } from '../alert';
import { DataProviderService } from '../data-provider.service';
import { REQUEST_TIMEOUT } from '../env';
import { PartsAdminListService } from '../parts-admin-list.service';
import { fromPromise } from '../timed-promise';
import { CategoryFilter } from '../types/category-filter.type';
import { Category } from '../types/category.type';
import { Part } from '../types/part.type';

const timeoutMS = REQUEST_TIMEOUT;

@Component({
  selector: 'app-part-form',
  templateUrl: './part-form.component.html',
  styleUrls: ['./part-form.component.scss']
})
export class PartFormComponent implements OnInit {
  @Input() public id: number | null = null;
  @Input() public trnMode: string = 'INS';

  public processing: boolean = false;
  public alerts: Alert[] = [];
  public valid: boolean = true;
  public btnText: string = '';
  public btnClass: string = '';
  public formTitle: string = '';
  public categories: Category[] = [];
  //public categories$: Observable<Category[]>;
  //private categorySource: BehaviorSubject<Category[]>;
  private part: Part = new Part();

  public partForm: FormGroup = this.formBuilder.group({
    name_piez: new FormControl<null | string>(null, Validators.required),
    id_cat: new FormControl<null | number>(null, Validators.required),
    url_img: new FormControl<null | string>(null, Validators.required),
    height: new FormControl<null | number>(null, Validators.required),
    resis_wind: new FormControl<null | number>(null, Validators.required),
    material: new FormControl<null | string>(null, Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataProvider: DataProviderService,
    private partsAdminListService: PartsAdminListService
  ) { 
    //this.categorySource = new BehaviorSubject<Category[]>([]);
    //this.categories$ = this.categorySource.asObservable();
  }

  ngOnInit(): void {
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    try {
      switch (this.trnMode) {
        case 'INS':
          this.btnText = 'Create';
          this.btnClass = 'btn-success';
          this.formTitle = 'Create Part';

          if (this.id) {
            throw new Error('ID should be null for insert mode');
          }
          else {
            this.loadCategories();
            this.processing = false;
            this.alerts = [];
          }

          break;
        case 'UPD':
          this.btnText = 'Update';
          this.btnClass = 'btn-warning';
          this.formTitle = 'Update Part';

          if (!this.id) {
            throw new Error('ID should not be null for update mode');
          }
          else {
            this.loadPart();
          }

          break;
        case 'DLT':
          this.btnText = 'Delete';
          this.btnClass = 'btn-danger';
          this.formTitle = 'Delete Part';

          if (!this.id) {
            throw new Error('ID should not be null for delete mode');
          }
          else {
            this.loadPart();
          }

          break;
        default:
          throw new Error('Unknown transaction mode');
      }
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  public onSubmit(): void {
    if (this.processing || !this.valid || !this.partForm.valid) {
      return;
    }
    this.processing = true
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    this.exportToValues();
    switch (this.trnMode) {
      case 'INS':
        this.insertPart();
        break;
      case 'UPD':
        this.updatePart();
        break;
      case 'DLT':
        this.deletePart();
        break;
      default:
        throw new Error('Unknown transaction mode');
    }
  }

  public removeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  private async loadCategories(): Promise<void> {
    let loadCategory = fromPromise<Category[]>(
      this.dataProvider.Category.getMany(new CategoryFilter()),
      timeoutMS,
      new Error('Error loading categories')
    );

    try {
      this.categories = await loadCategory;
      this.processing = false;
      this.alerts = [];
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private async loadPart(): Promise<void> {
    let loadCategory = fromPromise<Category[]>(
      this.dataProvider.Category.getMany(new CategoryFilter()),
      timeoutMS,
      new Error('Error loading categories')
    );

    let loadPart = fromPromise<Part>(
      this.dataProvider.Part.getOne(this.id!),
      timeoutMS,
      new Error('Error loading part')
    );

    try {
      this.categories = await loadCategory;
      this.part = await loadPart;
      this.importFromValues();
      this.processing = false;
      this.alerts = [];
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private async insertPart() {
    let insertPart = fromPromise<Part>(
      this.dataProvider.Part.create(this.exportToValues()),
      timeoutMS,
      new Error('Timeout inserting part')
    );

    try {
      this.part = await insertPart;
      this.partsAdminListService.refresh();
      this.activeModal.close();
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private async updatePart() {
    let updatePart = fromPromise<Part>(
      this.dataProvider.Part.update(this.part.id_piez, this.part),
      timeoutMS,
      new Error('Timeout updating part')
    );

    try {
      this.part = await updatePart;
      this.partsAdminListService.refresh();
      this.activeModal.close();
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private async deletePart() {
    let deletePart = fromPromise<number>(
      this.dataProvider.Part.remove(this.id!),
      timeoutMS,
      new Error('Timeout deleting part')
    );

    try {
      await deletePart;
      this.partsAdminListService.refresh();
      this.activeModal.close();
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.valid = false;
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private importFromValues(): void {
    this.partForm.patchValue({
      id_cat: this.part.id_cat,
      name_piez: this.part.name_piez,
      url_img: this.part.url_img,
      height: this.part.height,
      resis_wind: this.part.resis_wind,
      material: this.part.material,
    });
  }

  private exportToValues(): Part {
    this.part.id_cat = this.partForm.get('id_cat')?.value;
    this.part.name_piez = this.partForm.get('name_piez')?.value;
    this.part.url_img = this.partForm.get('url_img')?.value;
    this.part.height = this.partForm.get('height')?.value;
    this.part.resis_wind = this.partForm.get('resis_wind')?.value;
    this.part.material = this.partForm.get('material')?.value;
    return this.part;
  }
}
