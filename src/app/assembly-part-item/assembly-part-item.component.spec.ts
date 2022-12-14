import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyPartItemComponent } from './assembly-part-item.component';

describe('AssemblyPartItemComponent', () => {
  let component: AssemblyPartItemComponent;
  let fixture: ComponentFixture<AssemblyPartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblyPartItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssemblyPartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
