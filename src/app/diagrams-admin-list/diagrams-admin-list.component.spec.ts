import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramsAdminListComponent } from './diagrams-admin-list.component';

describe('DiagramsAdminListComponent', () => {
  let component: DiagramsAdminListComponent;
  let fixture: ComponentFixture<DiagramsAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramsAdminListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramsAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
