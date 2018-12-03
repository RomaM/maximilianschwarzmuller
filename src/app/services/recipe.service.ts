import {Injectable} from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>()

  recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'Desc of First Recipe',
      'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg',
      [
        new Ingredient('Meat', 100),
        new Ingredient('Solt', 1)
      ]
    ),
    new Recipe(
      'Second Recipe',
      'Desc of Second Recipe',
      'http://www.smartweek.it/wpsw/wp-content/uploads/2016/02/Pere.jpg',
      [
        new Ingredient('Meat', 20),
        new Ingredient('Solt', 2)
      ]
    ),
  ];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  // getRecipe(id: number) {
  //   return this.recipes[id];
  // }
  //
  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   this.recipeChanged.next(this.recipes.slice());
  // }
  //
  // updateRecipe(index: number, newRecipe: Recipe) {
  //   this.recipes[index] = newRecipe;
  // }
  //
  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipeChanged.next(this.recipes.slice());
  // }
}
