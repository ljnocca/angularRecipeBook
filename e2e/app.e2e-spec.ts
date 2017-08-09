import { RecipeAngularPage } from './app.po';

describe('recipe-angular App', () => {
  let page: RecipeAngularPage;

  beforeEach(() => {
    page = new RecipeAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
