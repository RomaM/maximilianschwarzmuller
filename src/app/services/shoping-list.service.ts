import { Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients: Ingredient[] = [
    {name: 'Lemon', amount: 15},
    {name: 'Watermelon', amount: 35}
  ];

  addIngredient(name: string, amount: number) {
    this.ingredients.push({name, amount});
  }

  removeIngredient(name: string) {
    this.ingredients = this.ingredients.filter(item => item.name !== name);
  }
}
