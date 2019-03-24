import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sznycel Wiedeński',
      'Sznycel wiedeński to kotlet z mięsa z udźca cielęcego panierowany  w mące, jajku i bułce tartej. Tradycyjnie smażony na klarowanym maśle i podawany z cząstką cytryny. Klasycznym dodatkiem do Wiener Schnitzel jest sałatka ziemniaczana.',
      'http://cdn12.beszamel.smcloud.net/t/thumbs/660/441/1/user_photos/ThinkstockPhotos-535423530.jpg',
      [
        new Ingredient('kotlet cielęcy', 4),
        new Ingredient('mąka', 1),
        new Ingredient('jajka', 2),
        new Ingredient('bułka tarta', 1),
        new Ingredient('sól', 1),
        new Ingredient('olej', 1),
        new Ingredient('masło', 1),
        new Ingredient('cytryna', 1)
      ]
    ),
    new Recipe(
      'Kanapka z jajkiem i awokado',
      'Kanapka z awokado i jajkiem to propozycja na śniadanie albo pomysł na pyszną przekąskę, którą przygotujemy w kilka chwil. Zapraszam Was także na grzanki z awokado i pomidorkami oraz pastę kanapkową z awokado.',
      'http://bi.im-g.pl/im/8f/ae/16/z23783567IF,Pelnowartosciowe-zrodla-bialka--to-miedzy-innymi-m.jpg',
      [
        new Ingredient('jajka', 2),
        new Ingredient('awokado', 2),
        new Ingredient('chleb', 1),
        new Ingredient('majonez', 1),
        new Ingredient('cebula', 1),
        new Ingredient('rukola', 1)
      ]
    ),
    new Recipe(
      'Mohito',
      'Drink mojito to jeden z najpopularniejszych koktajli na świecie. Jak zrobić mojito? Zobacz sprawdzony przepis na mojito prosto ze słonecznej Kuby!',
      'http://bi.im-g.pl/im/b9/ab/16/z23770809IF,Mojito-to-doskonaly-sposob-na-orzezwienie-w-cieple.jpg',
      [
        new Ingredient('limonka', 1),
        new Ingredient('cukier', 2),
        new Ingredient('mięta', 3),
        new Ingredient('rum', 1),
        new Ingredient('lód', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // will return not a reference of the array
    // but the copy that can be freely changed later
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
