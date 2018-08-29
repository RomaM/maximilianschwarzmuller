import { Component } from '@angular/core';
import {LoggingService} from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService]
})
export class AppComponent {
  constructor(private logData: LoggingService) {}

  activeComponent = 'recipe';

  onChangeMenu(data: string) {
    if (data) {
      this.activeComponent = data;
      this.logData.logStatusChange(data);
    }
  }
}
