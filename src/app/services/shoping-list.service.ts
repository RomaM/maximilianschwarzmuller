import {Injectable} from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import {LoggingService} from './logging.service';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class ShoppingListService {
  constructor(private logData: LoggingService) {}

  ingredientsChange = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Lemon', 15),
    new Ingredient('Watermelon', 35),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.logData.logStatusChange(this.ingredients);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  updateIngredients(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
