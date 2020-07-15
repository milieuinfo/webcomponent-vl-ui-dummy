/* eslint-disable no-unused-vars */
const {assert, driver} = require('vl-ui-core').Test.Setup;
const VLDummyPage = require('./pages/vl-dummy.page');

describe('vl-dummy', async () => {
  const VLDummyPage = new VLDummyPage(driver);

  before(() => {
    return VLDummyPage.load();
  });

  it('', async () => {
  });
});
