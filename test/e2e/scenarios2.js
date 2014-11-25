
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
      var phones = require('../../app/phones/phones');
      expect(phonelist.count()).toBe(phones.length);
      
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

	query.sendKeys('dell');

	expect(getNames()).toEqual([
	    'Dell Streak 7',
	    'Dell Venue'
	]);

	element(by.model('phonelist.orderProp')).element(by.css('option[value="name"]')).click();

	expect(getNames()).toEqual([
	    'Dell Streak 7',
	    'Dell Venue'
	]);

    });

    it('should sort phone order in reversed order', function() {
	var phoneNameColumn = element.all(by.repeater(repeater).column('phone.name'));
	
	function getNames(a) {
	    console.log('getNames():' + a);
	    return phoneNameColumn.map(function(elm) {
		return elm.getText();
	    });
	}

	query.sendKeys('tablet');

	element(by.model('phonelist.orderProp')).element(by.css('option[value="age"]')).click();
	var newestOrder = getNames(1).then(function(ary){
	    console.log('ary : ' + ary);
	    return ary.reverse();
	});

	console.log('newestOrder:' + newestOrder.toString());
	element(by.model('phonelist.orderProp')).element(by.css('option[value="-age"]')).click();
	expect(getNames(2).
	       then(function(ary){
		   console.log('ary : ' + ary);
		   return ary; // you have to return a value otherwise undefined will be returned.
	       })).
	toEqual(newestOrder);

    });

    it('should render phone specific links', function() {
	query.sendKeys('dell');
	
	element.all(by.css('.phones li a')).first().click();
	browser.getLocationAbsUrl().then(function(url) {
	    expect(url.split('#')[1]).toBe('/phones/dell-streak-7');
	});

	
    });

});

});
