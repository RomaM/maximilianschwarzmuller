import { Component } from '@angular/core';
import {LoggingService} from './services/logging.service';
import {DataStorageService} from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataStorageService: DataStorageService) {}

  activeComponent = 'recipe';

  onChangeMenu(data: string) {
    if (data) {
      this.activeComponent = data;
    }
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => { console.log(response); },
        (error: Response) => { console.log(error); }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
