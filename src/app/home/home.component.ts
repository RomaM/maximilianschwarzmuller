import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observer, Subscription, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscriptions: Subscription;
  customObsSubscriptions: Subscription;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(
      map((data: number) => {
        return data * 2;
      })
    );
    this.numbersObsSubscriptions = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 3000);
        setTimeout(() => {
          observer.next('third package');
        }, 4000);
        setTimeout(() => {
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('fourth package');
        }, 6000);
      }
    );

    this.customObsSubscriptions = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: any) => { console.log(error); },
      () => { console.log('COMPLETED'); }
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscriptions.unsubscribe();
    this.customObsSubscriptions.unsubscribe();
  }

  goToServer(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'}
    );
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
