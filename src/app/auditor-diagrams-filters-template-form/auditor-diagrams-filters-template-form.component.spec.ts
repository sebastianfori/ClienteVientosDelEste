import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorDiagramsFiltersTemplateFormComponent } from './auditor-diagrams-filters-template-form.component';

describe('AuditorDiagramsFiltersTemplateFormComponent', () => {
  let component: AuditorDiagramsFiltersTemplateFormComponent;
  let fixture: ComponentFixture<AuditorDiagramsFiltersTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorDiagramsFiltersTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorDiagramsFiltersTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
