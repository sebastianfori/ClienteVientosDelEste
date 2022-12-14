import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsAdminListComponent } from './parts-admin-list.component';

describe('PartsAdminListComponent', () => {
  let component: PartsAdminListComponent;
  let fixture: ComponentFixture<PartsAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsAdminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartsAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
