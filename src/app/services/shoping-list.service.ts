import {Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';

// @Injectable({providedIn: 'root'})

export class ShoppingListService {
  constructor() {}

  // ingredientsChange = new Subject<Ingredient[]>();
  // startedEditing = new Subject<number>();
  //
  // ingredients: Ingredient[] = [
  //   new Ingredient('Lemon', 15),
  //   new Ingredient('Watermelon', 35),
  // ];
  //
  // getIngredients() {
  //   return this.ingredients.slice();
  // }
  //
  // getIngredient(index: number) {
  //   return this.ingredients[index];
  // }
  //
  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChange.next(this.ingredients.slice());
  // }
  //
  // deleteIngredient(index: number) {
  //   this.ingredients.splice(index, 1);
  //   this.ingredientsChange.next(this.ingredients.slice());
  // }
  //
  // updateIngredients(index: number, newIngredient: Ingredient) {
  //   this.ingredients[index] = newIngredient;
  //   this.ingredientsChange.next(this.ingredients.slice());
  // }
}
