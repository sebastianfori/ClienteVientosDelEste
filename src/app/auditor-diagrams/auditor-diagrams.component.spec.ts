import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorDiagramsComponent } from './auditor-diagrams.component';

describe('AuditorDiagramsComponent', () => {
  let component: AuditorDiagramsComponent;
  let fixture: ComponentFixture<AuditorDiagramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorDiagramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorDiagramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
