import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDashboardFiltersTemplateComponent } from './operator-dashboard-filters-template.component';

describe('OperatorDashboardFiltersTemplateComponent', () => {
  let component: OperatorDashboardFiltersTemplateComponent;
  let fixture: ComponentFixture<OperatorDashboardFiltersTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDashboardFiltersTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorDashboardFiltersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
