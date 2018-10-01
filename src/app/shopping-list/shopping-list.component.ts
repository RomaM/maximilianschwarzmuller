import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';

import {ShoppingListService} from '../services/shoping-list.service';
import {Ingredient} from './ingredient.model';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, DoCheck, OnDestroy {
  ingredients: {name: string, amount: number}[] = [];
  blueClass = true;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChange
      .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngDoCheck() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
