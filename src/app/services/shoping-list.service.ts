import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import {LoggingService} from './logging.service';

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  constructor(private logData: LoggingService) {}

  ingredientsChange = new EventEmitter<Ingredient[]>()

  ingredients: Ingredient[] = [
    new Ingredient('Lemon', 15),
    new Ingredient('Watermelon', 35),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.logData.logStatusChange(this.ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
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

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
