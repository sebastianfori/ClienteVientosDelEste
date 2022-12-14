import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartsTemplateBodyListComponent } from './assembly-parts-template-body-list.component';

describe('AssemblyPartsTemplateBodyListComponent', () => {
  let component: AssemblyPartsTemplateBodyListComponent;
  let fixture: ComponentFixture<AssemblyPartsTemplateBodyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartsTemplateBodyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartsTemplateBodyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
