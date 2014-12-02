'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
    var driver = browser.driver;
    var repeater = 'phone in phonelist.phones';
    
    describe('Phone list view', function() {
    	beforeEach(function() {
	    driver.get('app/phones');
	});
	
    	it('should list all phones', function() {
	    var expectedList = require('../../app/phones/phones');
	    
	    var elements = element.all(by.repeater(repeater));
	    
	    elements.count().then(function(count) {
		expect(count).toBe(expectedList.length);
	    });
	});
    });

});
