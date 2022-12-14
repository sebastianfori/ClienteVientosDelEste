import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramsAdminComponent } from './diagrams-admin.component';

describe('DiagramsAdminComponent', () => {
  let component: DiagramsAdminComponent;
  let fixture: ComponentFixture<DiagramsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagramsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagramsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
