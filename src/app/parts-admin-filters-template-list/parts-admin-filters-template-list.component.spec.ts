import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdminFiltersTemplateListComponent } from './parts-admin-filters-template-list.component';

describe('PartsAdminFiltersTemplateListComponent', () => {
  let component: PartsAdminFiltersTemplateListComponent;
  let fixture: ComponentFixture<PartsAdminFiltersTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAdminFiltersTemplateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsAdminFiltersTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
