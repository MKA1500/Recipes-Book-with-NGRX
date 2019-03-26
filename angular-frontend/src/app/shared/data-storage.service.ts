
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService) {}


  storeRecipes() {
    const token = "someToken123"
    return this.httpClient.post<Recipe[]>('http://localhost:3000/api/recipes', this.recipeService.getRecipes(), {
      observe: 'body',
      // params: new HttpParams().set('auth', token)
      // headers: new HttpHeaders().set('Authorization', '4656765746');
    });
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('http://localhost:3000/api/recipes').pipe(
    map(
      (recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
