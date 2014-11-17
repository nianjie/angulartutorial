'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

describe('Phone list view', function() {

  beforeEach(function() {
    browser.get('app/index.html');
    console.log('\nbeforeEach: call me in scenarios.js.');
  });

  afterEach(function() {

  });

  it('should list phones', function() {
      var phonelist = element.all(by.repeater('phone in phonelist.phones'));
      expect(phonelist.count()).not.toBeLessThan(0);
  });
  
  it('should filter the phone list as a user types into the search box', function() {
      var phonelist = element.all(by.repeater('phone in phonelist.phones'));
      var query = element(by.model('query'));

      query.sendKeys('nexus');
      expect(phonelist.count()).toBe(1);
  });

});

});
