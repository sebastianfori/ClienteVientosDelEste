import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdminFiltersComponent } from './parts-admin-filters.component';

describe('PartsAdminFiltersComponent', () => {
  let component: PartsAdminFiltersComponent;
  let fixture: ComponentFixture<PartsAdminFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAdminFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsAdminFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
