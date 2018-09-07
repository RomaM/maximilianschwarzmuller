import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';

import {ShoppingListService} from '../../services/shoping-list.service';
import {Ingredient} from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const name: string = this.nameInputRef.nativeElement.value;
    let amount: any = this.amountInputRef.nativeElement.value;
    amount = parseInt(amount, 10);
    const ingredient: Ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
  }

  onRemoveItem(name) {
    this.shoppingListService.removeIngredient(name);
  }

}
