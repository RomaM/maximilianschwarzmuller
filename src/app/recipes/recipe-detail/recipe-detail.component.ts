import {Component, DoCheck, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnChanges, DoCheck {
  @Input() recipeDetails: Recipe;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  ngDoCheck() {

  }

}
