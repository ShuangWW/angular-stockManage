import { AngularStockManagePage } from './app.po';

describe('angular-stock-manage App', function() {
  let page: AngularStockManagePage;

  beforeEach(() => {
    page = new AngularStockManagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
