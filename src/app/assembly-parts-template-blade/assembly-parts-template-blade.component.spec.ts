import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartsTemplateBladeComponent } from './assembly-parts-template-blade.component';

describe('AssemblyPartsTemplateBladeComponent', () => {
  let component: AssemblyPartsTemplateBladeComponent;
  let fixture: ComponentFixture<AssemblyPartsTemplateBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartsTemplateBladeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartsTemplateBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
