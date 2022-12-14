import { Component, Input, OnInit } from '@angular/core';
import { Part } from '../types/part.type';

@Component({
  selector: 'app-assembly-part-item',
  templateUrl: './assembly-part-item.component.html',
  styleUrls: ['./assembly-part-item.component.scss'],
  host: {
    class: 'row bg-white border rounded',
    style: 'border-width:3;width:16rem'
  }
})
export class AssemblyPartItemComponent implements OnInit {
  @Input() part: Part | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
