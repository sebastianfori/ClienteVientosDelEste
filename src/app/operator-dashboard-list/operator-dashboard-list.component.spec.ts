import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDashboardListComponent } from './operator-dashboard-list.component';

describe('OperatorDashboardListComponent', () => {
  let component: OperatorDashboardListComponent;
  let fixture: ComponentFixture<OperatorDashboardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorDashboardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorDashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
