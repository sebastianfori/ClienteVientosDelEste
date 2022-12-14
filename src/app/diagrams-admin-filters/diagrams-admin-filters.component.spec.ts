import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramsAdminFiltersComponent } from './diagrams-admin-filters.component';

describe('DiagramsAdminFiltersComponent', () => {
  let component: DiagramsAdminFiltersComponent;
  let fixture: ComponentFixture<DiagramsAdminFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramsAdminFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramsAdminFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
