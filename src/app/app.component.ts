import {Component, OnInit} from '@angular/core';
import {LoggingService} from './services/logging.service';
import {DataStorageService} from './shared/data-storage.service';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  activeComponent = 'recipe';

  ngOnInit() {
    firebase.initializeApp({

      authDomain: 'http-test-ab7be.firebaseapp.com'
    });
  }

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

  onLogout() {
    this.authService.logout();
  }
}
