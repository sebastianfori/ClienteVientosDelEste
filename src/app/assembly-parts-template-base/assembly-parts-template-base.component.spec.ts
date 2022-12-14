import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartsTemplateBaseComponent } from './assembly-parts-template-base.component';

describe('AssemblyPartsTemplateBaseComponent', () => {
  let component: AssemblyPartsTemplateBaseComponent;
  let fixture: ComponentFixture<AssemblyPartsTemplateBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartsTemplateBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartsTemplateBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
