import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {Ingredient} from '../shopping-list/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  recipesArr: Recipe[] = [
    new Recipe(
      'First Recipe',
      'Desc of First Recipe',
      [
        new Ingredient('Meat', 100),
        new Ingredient('Solt', 1)
      ]
    ),
    new Recipe(
      'First Recipe',
      'Desc of First Recipe',
      [
        new Ingredient('Meat', 100),
        new Ingredient('Solt', 1)
      ]
    ),
  ];

  addRecipe(name: string, desc: string, ingredients: any) {
    this.recipesArr.push({name, desc, ingredients});
  }

  removeRecipe(name: string) {
    this.recipesArr = this.recipesArr.filter(item => {
      if ( item.name.toLowerCase() !== name.toLowerCase()) {
        return item;
      }
    });
  }
}
