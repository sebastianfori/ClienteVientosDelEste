import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramsAdminFiltersTemplateFormComponent } from './diagrams-admin-filters-template-form.component';

describe('DiagramsAdminFiltersTemplateFormComponent', () => {
  let component: DiagramsAdminFiltersTemplateFormComponent;
  let fixture: ComponentFixture<DiagramsAdminFiltersTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramsAdminFiltersTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramsAdminFiltersTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
