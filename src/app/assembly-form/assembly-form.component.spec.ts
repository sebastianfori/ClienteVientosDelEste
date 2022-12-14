import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyFormComponent } from './assembly-form.component';

describe('AssemblyFormComponent', () => {
  let component: AssemblyFormComponent;
  let fixture: ComponentFixture<AssemblyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
