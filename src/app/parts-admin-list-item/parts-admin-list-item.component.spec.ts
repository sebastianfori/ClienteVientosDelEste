import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdminListItemComponent } from './parts-admin-list-item.component';

describe('PartsAdminListItemComponent', () => {
  let component: PartsAdminListItemComponent;
  let fixture: ComponentFixture<PartsAdminListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAdminListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsAdminListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
