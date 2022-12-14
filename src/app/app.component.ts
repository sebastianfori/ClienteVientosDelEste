import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'd-flex flex-column h-100 w-100'
  }
})
export class AppComponent {
  title = 'client-web';
}
