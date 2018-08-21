import {Component, OnInit} from '@angular/core';

import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Lemon', 15),
    new Ingredient('Watermelon', 35)
  ];

  blueClass = true;

  constructor() { }

  ngOnInit() {
  }

  addIngredient(data: Ingredient) {
    this.ingredients.push(data);
  }
}
