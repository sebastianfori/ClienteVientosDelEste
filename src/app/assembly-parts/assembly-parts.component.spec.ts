import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartsComponent } from './assembly-parts.component';

describe('AssemblyPartsComponent', () => {
  let component: AssemblyPartsComponent;
  let fixture: ComponentFixture<AssemblyPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
