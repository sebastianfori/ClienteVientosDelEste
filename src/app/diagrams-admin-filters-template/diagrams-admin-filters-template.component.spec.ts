import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramsAdminFiltersTemplateComponent } from './diagrams-admin-filters-template.component';

describe('DiagramsAdminFiltersTemplateComponent', () => {
  let component: DiagramsAdminFiltersTemplateComponent;
  let fixture: ComponentFixture<DiagramsAdminFiltersTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramsAdminFiltersTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramsAdminFiltersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
