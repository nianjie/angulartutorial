'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
    var driver = browser.driver;
describe('Phone list view', function() {

  var phonelist, query;

  beforeEach(function() {

    console.log('\nbeforeEach: call me in scenarios2.js.');
    driver.get('app/index.html');
  });

    phonelist = element.all(by.repeater('phone in phonelist.phones'));
    query = element(by.model('query'));

  it('should display the current filter value in the title bar', function() {

      expect(phonelist.count()).toBe(3);
      
      query.clear();
      expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);
      
      query.sendKeys('motorola');
      expect(browser.getTitle()).toMatch(/Google Phone Gallery: motorola$/);
  });

});

});
