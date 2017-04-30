import { GrantsControlPage } from './app.po';

describe('grants-control App', () => {
  let page: GrantsControlPage;

  beforeEach(() => {
    page = new GrantsControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
