import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable()

export class AccountService {
  recipesArr: Recipe[] = [
    {name: 'First Recipe', desc: 'Desc of First Recipe', ingredients: '...ingredients for First Recipe'},
    {name: 'Second Recipe', desc: 'Desc of Second Recipe', ingredients: '...ingredients for Second Recipe'}
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
