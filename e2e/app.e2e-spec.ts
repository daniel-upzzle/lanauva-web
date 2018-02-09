import { LanauvaWebPage } from './app.po';

describe('lanauva-web App', () => {
  let page: LanauvaWebPage;

  beforeEach(() => {
    page = new LanauvaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
