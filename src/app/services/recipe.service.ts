import {Injectable} from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import {Ingredient} from '../shopping-list/ingredient.model';
import {ShoppingListService} from './shoping-list.service';
import {Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>()

  recipesArr: Recipe[] = [
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

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe(id: number) {
    return this.recipesArr[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipesArr.push(recipe);
    this.recipeChanged.next(this.recipesArr.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipesArr[index] = newRecipe;
  }

  removeRecipe(name: string) {
    this.recipesArr = this.recipesArr.filter(item => {
      if ( item.name.toLowerCase() !== name.toLowerCase()) {
        return item;
      }
    });
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
