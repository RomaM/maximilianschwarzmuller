import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../services/shoping-list.service';
import {Ingredient} from '../shared/ingredient.model';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  blueClass = true;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.pipe(
      select('shoppingList')
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
