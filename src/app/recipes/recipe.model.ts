import {Ingredient} from '../shopping-list/ingredient.model';

export class Recipe {
  public name: string;
  public desc: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, ingredients: Ingredient[]) {
    this.name = name;
    this.desc = desc;
    this.ingredients = ingredients;
  }
}