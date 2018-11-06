import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
import * as firebase from 'firebase';
import {HttpEvent, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  activeComponent = 'recipe';

  ngOnInit() {
    firebase.initializeApp({

      authDomain: 'http-test-ab7be.firebaseapp.com'
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
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
    this.authService.logout();
  }
}
