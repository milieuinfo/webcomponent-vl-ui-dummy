const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlDummyPage = require('./pages/vl-dummy.page');

describe('vl-dummy', async () => {
  const vlDummyPage = new VlDummyPage(driver);

  before(() => {
    return vlDummyPage.load();
  });

  it('dit is een test', async () => {
    assert.isTrue(true);
  });
});
