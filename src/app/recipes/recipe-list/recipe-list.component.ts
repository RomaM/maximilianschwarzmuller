// import {Recipe} from '../recipe.model';
// import {RecipeService} from '../../services/recipe.service';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeState: Observable<fromRecipe.State>;
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
    // this.recipes = this.recipeService.getRecipes();
    // this.subscription = this.recipeService.recipeChanged.subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipes = recipes;
    //   }
    // );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route} );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
