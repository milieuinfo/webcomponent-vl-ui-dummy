const VlDummy = require('../components/vl-dummy');
const {Page, Config} = require('vl-ui-core').Test;

class VlDummyPage extends Page {
  async _getDummy(selector) {
    return new VlDummy(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-dummy.html');
  }
}

module.exports = VlDummyPage;
