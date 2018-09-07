import {Component, DoCheck, OnInit} from '@angular/core';

import {ShoppingListService} from '../services/shoping-list.service';
import {Ingredient} from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, DoCheck {
  ingredients: {name: string, amount: number}[] = [];
  blueClass = true;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChange
      .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngDoCheck() {

  }
}
