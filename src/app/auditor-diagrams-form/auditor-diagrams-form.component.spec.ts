import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorDiagramsFormComponent } from './auditor-diagrams-form.component';

describe('AuditorDiagramsFormComponent', () => {
  let component: AuditorDiagramsFormComponent;
  let fixture: ComponentFixture<AuditorDiagramsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditorDiagramsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorDiagramsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
