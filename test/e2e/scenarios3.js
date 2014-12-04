'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
    var driver = browser.driver;
    var repeater = 'phone in phonelist.phones';

    it('should redirect index.html to index.html#/phones', function() {
	driver.get('app/');
	browser.getLocationAbsUrl().then(function(url) {
	    expect(url.split('#')[1]).toBe('/phones');
	});
    });

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

    describe('Phone detail view', function() {
	var phoneId = 'dell-streak-7';
	beforeEach(function() {
	    driver.get('app/index.html#/phones/' + phoneId );
	});

	it('should display the page detailing the phone ' + phoneId, function() {
	    expect(element(by.css('h1')).getText()).toEqual('Dell Streak 7');
	});
	
	it('should display images of the phone ' + phoneId, function() {
	    var expectedImgs = require('../../app/phones/' + phoneId).images;

	    var imgs = element.all(by.repeater('img in phone.phone.images')).all(by.css('img'));
	    expect(imgs.count()).toBe(expectedImgs.length);
	});

	it('should swap images of the phone ' + phoneId, function() {
            var mainImg = element(by.css('.phone'));
            var imgs = element.all(by.repeater('img in phone.phone.images')).all(by.css('img'));
            imgs.then(function(items){
                console.log('items.length:' + items.length);
                for(var i = 0; i<items.length; i++) {
                    items[i].click();
                    expect(mainImg.getAttribute('src')).toEqual(items[i].getAttribute('src'));
                };
                return items;
            });
        });

    });

});
