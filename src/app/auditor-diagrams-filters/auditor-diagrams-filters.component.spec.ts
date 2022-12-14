import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorDiagramsFiltersComponent } from './auditor-diagrams-filters.component';

describe('AuditorDiagramsFiltersComponent', () => {
  let component: AuditorDiagramsFiltersComponent;
  let fixture: ComponentFixture<AuditorDiagramsFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorDiagramsFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorDiagramsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
