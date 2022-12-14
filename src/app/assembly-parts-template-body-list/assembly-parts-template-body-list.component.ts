import { Component, OnInit } from '@angular/core';
import { AssemblyService } from '../assembly.service';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-assembly-parts-template-body-list',
  templateUrl: './assembly-parts-template-body-list.component.html',
  styleUrls: ['./assembly-parts-template-body-list.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class AssemblyPartsTemplateBodyListComponent implements OnInit {
  public bodies: Part[] = [];

  constructor(public assemblyService: AssemblyService) { 
    this.assemblyService.bodies$.subscribe(bodies => this.updateBodies(bodies));
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.bodies = [];
    this.assemblyService.refresh();
  }

  updateBodies(bodies: Part[]): void {
    this.bodies = bodies;
  }

  drop(event: any): void {
    this.assemblyService.drop(event);
  }
}
