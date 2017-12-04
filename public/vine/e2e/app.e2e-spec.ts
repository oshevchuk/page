import { VinePage } from './app.po';

describe('vine App', () => {
  let page: VinePage;

  beforeEach(() => {
    page = new VinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
