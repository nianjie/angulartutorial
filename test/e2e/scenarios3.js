'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
    var driver = browser.driver;
    var repeater = 'phone in phonelist.phones';
    
    describe('Phone list view', function() {

	beforeEach(function() {
	    driver.get('app/index.html');// access url instead of app/phones
	});

    	it('should list all phones', function() {
	    var expectedList = require('../../app/phones/phones');
	    
	    var actualList = element.all(by.repeater(repeater));
	    
	    actualList.count().then(function(count) {
		expect(count).toBe(expectedList.length);
		return count;
	    });

	});
    });

});
