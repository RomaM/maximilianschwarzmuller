import { Component } from '@angular/core';
import {LoggingService} from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  activeComponent = 'recipe';

  onChangeMenu(data: string) {
    if (data) {
      this.activeComponent = data;
    }
  }
}
