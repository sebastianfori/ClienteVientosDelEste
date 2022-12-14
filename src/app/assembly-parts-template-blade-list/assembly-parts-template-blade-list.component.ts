import { Component, OnInit } from '@angular/core';
import { AssemblyService } from '../assembly.service';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-assembly-parts-template-blade-list',
  templateUrl: './assembly-parts-template-blade-list.component.html',
  styleUrls: ['./assembly-parts-template-blade-list.component.scss'],
  host: {
    class: 'w-100'
  }
})
export class AssemblyPartsTemplateBladeListComponent implements OnInit {
  public blades: Part[] = [];

  constructor(public assemblyService: AssemblyService) { 
    this.assemblyService.blades$.subscribe(blades => this.updateBlades(blades));
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.blades = [];
    this.assemblyService.refresh();
  }

  updateBlades(blades: Part[]): void {
    this.blades = blades;
  }

  drop(event: any): void {
    this.assemblyService.drop(event);
  }
}
