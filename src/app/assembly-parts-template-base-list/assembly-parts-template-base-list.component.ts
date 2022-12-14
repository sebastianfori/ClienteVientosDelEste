import { Component, OnInit } from '@angular/core';
import { AssemblyService } from '../assembly.service';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-assembly-parts-template-base-list',
  templateUrl: './assembly-parts-template-base-list.component.html',
  styleUrls: ['./assembly-parts-template-base-list.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class AssemblyPartsTemplateBaseListComponent implements OnInit {
  public bases: Part[] = [];

  constructor(public assemblyService: AssemblyService) { 
    this.assemblyService.bases$.subscribe(bases => this.updateBases(bases));
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.bases = [];
    this.assemblyService.refresh();
  }

  updateBases(bases: Part[]): void {
    this.bases = bases;
  }

  drop(event: any): void {
    this.assemblyService.drop(event);
  }
}
