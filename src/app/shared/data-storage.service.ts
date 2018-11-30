import { Injectable } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import { map } from 'rxjs/operators';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    // const token = this.authService.getToken();

    // return this.httpClient.put('https://http-test-ab7be.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //     observe: 'body',
    //     params: new HttpParams().set('auth', token)
    //   });

    const req = new HttpRequest('PUT', 'https://http-test-ab7be.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // const token = this.authService.getToken();

    // this.httpClient.get<Recipe[]>('https://http-test-ab7be.firebaseio.com/recipes.json?auth=' + token)

  }
}
