import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartsTemplateBaseListComponent } from './assembly-parts-template-base-list.component';

describe('AssemblyPartsTemplateBaseListComponent', () => {
  let component: AssemblyPartsTemplateBaseListComponent;
  let fixture: ComponentFixture<AssemblyPartsTemplateBaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartsTemplateBaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartsTemplateBaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
