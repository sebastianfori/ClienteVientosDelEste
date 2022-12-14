import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartsTemplateBodyComponent } from './assembly-parts-template-body.component';

describe('AssemblyPartsTemplateBodyComponent', () => {
  let component: AssemblyPartsTemplateBodyComponent;
  let fixture: ComponentFixture<AssemblyPartsTemplateBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartsTemplateBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartsTemplateBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
