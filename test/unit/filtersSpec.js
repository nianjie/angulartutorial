'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

    beforeEach(module('phonecatFilters'));

    
    describe('checkmark', function() {
	var checkmark;
	beforeEach(inject(function(checkmarkFilter) {
	    checkmark = checkmarkFilter;
	}));
	
	it('should convert boolean values to unicode checkmark or cross', function() {
	    expect(checkmark(true)).toBe('\u2713');
	    expect(checkmark(false)).toBe('\u2718');
	});
    });
});
