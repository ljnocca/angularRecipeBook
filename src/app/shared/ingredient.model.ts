export class Ingredient {

  // this is the shortcut version of making a constructor. simply add an accessor such as 'public' in front and will
  // automatically assign to newly created properties

  constructor(public name: string, public amount: number) { }
}
