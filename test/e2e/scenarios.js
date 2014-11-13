'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

describe('Phone list view', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });


  it('should list phones', function() {
      var phonelist = element.all(by.repeater('phone in phonelist.phones'));
      expect(phonelist.count()).toEqual(3);
  });
  
});

});
