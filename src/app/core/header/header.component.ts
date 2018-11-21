import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import * as firebase from 'firebase';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {DataStorageService} from '../../shared/data-storage.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  activeComponent = 'recipe';
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');

    firebase.initializeApp({
      apiKey: 'AIzaSyCMMmKapVEmocqjf6vUwebiBAsTb9_e43A',
      authDomain: 'http-test-ab7be.firebaseapp.com'
    });
  }

  isAuthenticated() {
    // return this.authService.isAuthenticated();
  }

  onChangeMenu(data: string) {
    if (data) {
      this.activeComponent = data;
    }
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
          },
        (error) => { console.log(error); }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    // this.authService.logout();
    this.store.dispatch(new AuthActions.Logout());
  }
}
