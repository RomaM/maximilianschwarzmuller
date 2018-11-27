import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

export interface FeatureState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
};

export function recipeReducer(state = initialState, action) {
  return state;
}
