import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorDiagramsFiltersTemplateComponent } from './auditor-diagrams-filters-template.component';

describe('AuditorDiagramsFiltersTemplateComponent', () => {
  let component: AuditorDiagramsFiltersTemplateComponent;
  let fixture: ComponentFixture<AuditorDiagramsFiltersTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorDiagramsFiltersTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorDiagramsFiltersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
