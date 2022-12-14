import { Component, OnInit } from '@angular/core';
import { faShapes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assembly-parts',
  templateUrl: './assembly-parts.component.html',
  styleUrls: ['./assembly-parts.component.scss'],
  host: {
    class: 've-sidebar row gx-0 d-inline-flex w-100',
  }
})
export class AssemblyPartsComponent implements OnInit {
  public faParts: IconDefinition = faShapes;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
