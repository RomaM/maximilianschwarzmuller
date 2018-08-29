import { Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import {LoggingService} from './logging.service';

@Injectable()

export class ShoppingListService {
  constructor(private logData: LoggingService) {}

  ingredients: Ingredient[] = [
    {name: 'Lemon', amount: 15},
    {name: 'Watermelon', amount: 35}
  ];

  addIngredient(name: string, amount: number) {
    this.ingredients.push({name, amount});
    this.logData.logStatusChange(this.ingredients);
  }

  removeIngredient(name: string) {
    this.ingredients.forEach((el, i, arr) => {
      if (el.name === name) {
        arr.splice(i, 1);
      }
    });

    this.logData.logStatusChange(this.ingredients);
    setTimeout(() => this.logData.logStatusChange(this.ingredients), 1000);
  }
}
