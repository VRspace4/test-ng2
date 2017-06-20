import { TestNg2Page } from './app.po';

describe('test-ng2 App', () => {
  let page: TestNg2Page;

  beforeEach(() => {
    page = new TestNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
