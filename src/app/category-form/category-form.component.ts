import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert, AlertType } from '../alert';
import { CategoriesAdminListService } from '../categories-admin-list.service';
import { DataProviderService } from '../data-provider.service';
import { REQUEST_TIMEOUT } from '../env';
import { fromPromise } from '../timed-promise';
import { Category } from '../types/category.type';

const timeoutMS = REQUEST_TIMEOUT;

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  @Input() public id: number | null = null;
  @Input() public trnMode: string = 'INS';

  public processing: boolean = false;
  public alerts: Alert[] = [];
  public valid: boolean = true;
  public btnText: string = '';
  public btnClass: string = '';
  public formTitle: string = '';
  private category: Category = new Category();

  public categoryForm: FormGroup = this.formBuilder.group({
    name_cat: new FormControl<null | string>(null, Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private dataProvider: DataProviderService,
    private categoriesAdminListService: CategoriesAdminListService
  ) { }

  ngOnInit(): void {
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    try {
      switch (this.trnMode) {
        case 'INS':
          this.btnText = 'Create category';
          this.btnClass = 'btn-primary';
          this.formTitle = 'Create Category';

          if (this.id) {
            throw new Error('ID should be null for insert mode');
          }
          else {
            this.processing = false;
            this.alerts = [];
          }

          break;
        case 'UPD':
          this.btnText = 'Update category';
          this.btnClass = 'btn-primary';
          this.formTitle = 'Update Category';

          if (!this.id) {
            throw new Error('ID should not be null for update mode.');
          }
          else {
            this.loadCategory();
          }

          break;
        case 'DLT':
          this.btnText = 'Delete category';
          this.btnClass = 'btn-danger';
          this.formTitle = 'Delete Category';

          if (!this.id) {
            throw new Error('ID should not be null for delete mode.');
          }
          else {
            this.loadCategory();
          }

          break;
        default:
          throw new Error('Invalid transaction mode.');
      }
    } catch (error) {
      this.valid = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>error).message, false, 0, false));
    }
  }

  public onSubmit(): void {
    if (this.processing || !this.valid || !this.categoryForm.valid) {
      return;
    }
    this.processing = true;
    this.alerts.push(new Alert(AlertType.Info, 'Processing...', false, 0, false));

    this.exportToValues();
    switch (this.trnMode) {
      case 'INS':
        this.insertCategory();
        break;
      case 'UPD':
        this.updateCategory();
        break;
      case 'DLT':
        this.deleteCategory();
        break;
      default:
        throw new Error('Invalid transaction mode.');
    }
  }

  public removeAlert(alert: Alert): void {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  private async loadCategory() {
    let loadCategory = fromPromise<Category>(
      this.dataProvider.Category.getOne(this.id!),
      timeoutMS,
      new Error('Timeout loading category.')
    );

    try {
      this.category = await loadCategory;
      this.importFromValues();
      this.processing = false;
      this.alerts = [];
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
      this.valid = false;
    }
  }

  private async insertCategory() {
    let insertCategory = fromPromise<Category>(
      this.dataProvider.Category.create(this.category),
      timeoutMS,
      new Error('Timeout inserting category.')
    );

    try {
      this.category = await insertCategory;
      this.categoriesAdminListService.refresh();
      this.activeModal.close();
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private async updateCategory() {
    let updateCategory = fromPromise<Category>(
      this.dataProvider.Category.update(this.category.id_cat, this.category),
      timeoutMS,
      new Error('Timeout updating category.')
    );

    try {
      this.category = await updateCategory;
      this.categoriesAdminListService.refresh();
      this.activeModal.close();
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private async deleteCategory() {
    let deleteCategory = fromPromise<number>(
      this.dataProvider.Category.remove(this.id!),
      timeoutMS,
      new Error('Timeout deleting category.')
    );

    try {
      await deleteCategory;
      this.categoriesAdminListService.refresh();
      this.activeModal.close();
    }
    catch (err) {
      this.processing = false;
      this.alerts = [];
      this.alerts.push(new Alert(AlertType.Danger, (<Error>err).message, false, 0, false));
    }
  }

  private importFromValues(): void {
    this.categoryForm.patchValue({
      name_cat: this.category.name_cat
    });
  }

  private exportToValues() {
    this.category.name_cat = this.categoryForm.get('name_cat')?.value;
  }
}
