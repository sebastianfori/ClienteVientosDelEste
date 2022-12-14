import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap/alert/alert';

import { Alert } from '../alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  staticAlertClosed: boolean = false;

  @Input() alert: Alert | null = null;
  @Output() remove: EventEmitter<Alert> = new EventEmitter();

  @ViewChild('staticAlert', { static: false }) staticAlert?: NgbAlert;

  constructor() { }

  ngOnInit(): void {
    if (this.alert) {
      if (this.alert.autoClose) {
        setTimeout(() => {
          this.staticAlert?.close();
        }, this.alert.autoCloseTime);
      }
    }
  }

  close(): void {
    this.remove.emit(this.alert!);
  }
}