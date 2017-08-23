export class Recipe {
  // This model is a blueprint for recipe objects we create
  // propertyName: type
  public name: string;
  public description: string;
  public imagePath: string;

  // constructor so you can instantiate with a new keyword and pass the arguments to the constructor
  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
