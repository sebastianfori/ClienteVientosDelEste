import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartsTemplateBladeListComponent } from './assembly-parts-template-blade-list.component';

describe('AssemblyPartsTemplateBladeListComponent', () => {
  let component: AssemblyPartsTemplateBladeListComponent;
  let fixture: ComponentFixture<AssemblyPartsTemplateBladeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartsTemplateBladeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartsTemplateBladeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
