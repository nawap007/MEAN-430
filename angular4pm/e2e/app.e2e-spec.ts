import { Angular4pmPage } from './app.po';

describe('angular4pm App', () => {
  let page: Angular4pmPage;

  beforeEach(() => {
    page = new Angular4pmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
