import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model'
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable() // since we want to inject a service into this service
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'This is simply a test',
      'https://www.redrobin.com/content/dam/web/menu/tavern-menu/sir-acha-tavern-double-burger-217.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bun', 1),
        new Ingredient('Bacon', 3),
        new Ingredient('Ketchup', 1)
      ]),
    new Recipe(
      'Fish & Chips',
      'England\'s finest',
      'http://citispotter.com/wp-content/uploads/2016/11/1-1.jpg',
      [
        new Ingredient('Cod', 1),
        new Ingredient('Chips', 1),
        new Ingredient('Lemon', 1),
        new Ingredient('Vinegar', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // slice returns a new array that is a copy of the one in this service file
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

  updateRecipe(index:number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
