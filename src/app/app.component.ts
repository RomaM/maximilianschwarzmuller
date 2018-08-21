import { Component } from '@angular/core';

import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recipesArr: Recipe[] = [
    {name: 'First Recipe', desc: 'Desc of First Recipe', ingredients: '...ingredients for First Recipe'},
    {name: 'Second Recipe', desc: 'Desc of Second Recipe', ingredients: '...ingredients for Second Recipe'}
  ];

  activeComponent = 'recipe';

  onChangeMenu(data: string) {
    if (data) {
      this.activeComponent = data;
    }
  }
}
