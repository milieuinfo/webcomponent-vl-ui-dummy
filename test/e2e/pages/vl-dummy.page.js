/* eslint-disable no-unused-vars */
const VLDummy = require('../components/vl-dummy');
const {Page, Config} = require('vl-ui-core').Test;

class VLDummyPage extends Page {
  async _getDummy(selector) {
    return new VlDummy(this.driver, selector);
  }

  async load() {
    await super.load(config.baseUrl);
  }
}

module.exports = VLDummyPage;
