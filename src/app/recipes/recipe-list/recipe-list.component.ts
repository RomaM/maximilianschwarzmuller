import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';
import {AccountService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [AccountService]
})
export class RecipeListComponent implements OnInit {
  recipes: {name: string, desc: string, ingredients: any}[] = [];
  @Output() selectedItemData = new EventEmitter<Recipe>();

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.recipes = this.accountService.recipesArr;
  }

  onSelectedItem(item) {
    this.selectedItemData.emit(item);
  }
}
