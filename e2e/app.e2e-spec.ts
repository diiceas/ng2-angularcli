import { NgAngularcliPage } from './app.po';

describe('ng-angularcli App', function() {
  let page: NgAngularcliPage;

  beforeEach(() => {
    page = new NgAngularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
