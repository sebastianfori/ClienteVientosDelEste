import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdminFiltersTemplateFormComponent } from './parts-admin-filters-template-form.component';

describe('PartsAdminFiltersTemplateFormComponent', () => {
  let component: PartsAdminFiltersTemplateFormComponent;
  let fixture: ComponentFixture<PartsAdminFiltersTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAdminFiltersTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsAdminFiltersTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
