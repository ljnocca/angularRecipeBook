import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  // This model is a blueprint for recipe objects we create
  // propertyName: type
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  // constructor so you can instantiate with a new keyword and pass the arguments to the constructor
  // constructor is a built-in function every class that will be executed each time you create a new instance of each class
  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
