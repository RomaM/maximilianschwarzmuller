import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];
  @Output() selectedItemData = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedItem(item) {
    this.selectedItemData.emit(item);
  }
}
