import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';

import {ShoppingListService} from '../../services/shoping-list.service';

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

  onAddItem(name, amount) {
    amount = parseInt(amount, 10);
    this.shoppingListService.addIngredient(name, amount);
  }

  onRemoveItem(name) {
    this.shoppingListService.removeIngredient(name);
  }

}
