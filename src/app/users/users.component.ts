import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  userServiceSubscriber: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.userServiceSubscriber = this.usersService.activateUser.subscribe(
      (id: number) => {
        const elems = this.users.filter((el: {id: number, name: string}) => {
          return el.id === +id;
        });

        elems.forEach( (el) => {
          el.name = el.name + ':activated';
        });
      }
    );
  }

  ngOnDestroy() {
    this.userServiceSubscriber.unsubscribe();
  }
}
