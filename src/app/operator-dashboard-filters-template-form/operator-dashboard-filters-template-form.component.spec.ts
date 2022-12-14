import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDashboardFiltersTemplateFormComponent } from './operator-dashboard-filters-template-form.component';

describe('OperatorDashboardFiltersTemplateFormComponent', () => {
  let component: OperatorDashboardFiltersTemplateFormComponent;
  let fixture: ComponentFixture<OperatorDashboardFiltersTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDashboardFiltersTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorDashboardFiltersTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
