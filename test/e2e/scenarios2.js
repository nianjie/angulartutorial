'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
    var driver = browser.driver;
describe('Phone list view', function() {

  var phonelist, query, 
    repeater = 'phone in phonelist.phones';

  beforeEach(function() {

    console.log('\nbeforeEach: call me in scenarios2.js.');
    driver.get('app/index.html');
  });

    phonelist = element.all(by.repeater(repeater));
    query = element(by.model('query'));


  it('should display the current filter value in the title bar', function() {

      expect(phonelist.count()).toBe(3);
      
      query.clear();
      expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);
      
      query.sendKeys('motorola');
      expect(browser.getTitle()).toMatch(/Google Phone Gallery: motorola$/);
  });

    it('should be possible to control phone order via the drop down select box', function() {
	var phoneNameColumn = element.all(by.repeater(repeater).column('{{phone.name}}'));

	function getNames() {
	    return phoneNameColumn.map(function(elm) {
		return elm.getText();
	    });
	}

	query.sendKeys('tablet');

	expect(getNames()).toEqual([
	    'Motorola XOOM with Wi-Fi',
	    'Motorola XOOM'
	]);

	element(by.model('phonelist.orderProp')).element(by.css('option[value="name"]')).click();

	expect(getNames()).toEqual([
	    'Motorola XOOM',
	    'Motorola XOOM with Wi-Fi'
	]);

    });
});

});
