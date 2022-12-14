import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorDiagramsListComponent } from './auditor-diagrams-list.component';

describe('AuditorDiagramsListComponent', () => {
  let component: AuditorDiagramsListComponent;
  let fixture: ComponentFixture<AuditorDiagramsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorDiagramsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorDiagramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
