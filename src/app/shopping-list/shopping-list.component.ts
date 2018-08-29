import {Component, DoCheck, OnInit} from '@angular/core';

import {ShoppingListService} from '../services/shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, DoCheck {
  ingredients: {name: string, amount: number}[] = [];
  blueClass = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  ngDoCheck() {
    this.ingredients = this.shoppingListService.ingredients;
  }
}
