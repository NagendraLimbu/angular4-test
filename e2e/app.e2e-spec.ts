import { NgrPlaygroundPage } from './app.po';

describe('ngr-playground App', () => {
  let page: NgrPlaygroundPage;

  beforeEach(() => {
    page = new NgrPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
