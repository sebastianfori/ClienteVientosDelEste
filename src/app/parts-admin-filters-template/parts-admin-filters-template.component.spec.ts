import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdminFiltersTemplateComponent } from './parts-admin-filters-template.component';

describe('PartsAdminFiltersTemplateComponent', () => {
  let component: PartsAdminFiltersTemplateComponent;
  let fixture: ComponentFixture<PartsAdminFiltersTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAdminFiltersTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsAdminFiltersTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
