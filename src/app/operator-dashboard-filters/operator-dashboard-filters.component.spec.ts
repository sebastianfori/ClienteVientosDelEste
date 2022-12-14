import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDashboardFiltersComponent } from './operator-dashboard-filters.component';

describe('OperatorDashboardFiltersComponent', () => {
  let component: OperatorDashboardFiltersComponent;
  let fixture: ComponentFixture<OperatorDashboardFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDashboardFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorDashboardFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
