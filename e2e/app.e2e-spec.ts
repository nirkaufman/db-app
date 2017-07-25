import { DbvAppPage } from './app.po';

describe('dbv-app App', () => {
  let page: DbvAppPage;

  beforeEach(() => {
    page = new DbvAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
