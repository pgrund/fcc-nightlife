import { FccNightlifePage } from './app.po';

describe('fcc-nightlife App', () => {
  let page: FccNightlifePage;

  beforeEach(() => {
    page = new FccNightlifePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
