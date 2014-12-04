'use strict';

/* jasmine specs for controllers go here */

describe('PhoneCat controllers', function() {

    beforeEach(function() {
	this.addMatchers({
	    toEqualData: function(expected) {
		return angular.equals(this.actual, expected);
	    }
	});
    });

    beforeEach(module('phonecatApp'));
    beforeEach(module('phonecatServices'));

    describe('PhoneListCtrl', function() {
	var scope, ctrl, $httpBackend;

	beforeEach(module('phonecatControllers'));

	beforeEach(inject(function($controller, _$httpBackend_) {
	    $httpBackend = _$httpBackend_;
	    $httpBackend.expectGET('phones/phones.json').
		respond([{name:'Nexus S'}, {name:'Motorola DROID'}]);

	    scope = {};
	    ctrl = $controller('PhoneListCtrl', {$scope:scope});
	}));

	it("should create 'phones' model with 2 phones", function() {
	    expect(ctrl.phones).toEqualData([]);
	    $httpBackend.flush();

	    expect(ctrl.phones).toEqualData([{name:'Nexus S'}, {name:'Motorola DROID'}]);

	});

	it("should set the default value of orderProp property", function() {
	    expect(ctrl.orderProp).toBe('age');
	});

    });

    describe('PhoneDetailCtrl', function() {
	var scope, routeParam, ctrl, $httpBackend;
	var thePhone = {name: 'Dell Streak 7', images:['url1', 'url2','url3']}, thePhoneId='dell-streak-7';

	beforeEach(module('phonecatControllers'));

	beforeEach(inject(function($controller, _$httpBackend_) {
	    $httpBackend = _$httpBackend_;
	    $httpBackend.expectGET('phones/' + thePhoneId + '.json').
		respond(thePhone);

	    scope = {};
	    routeParam = {'phoneId': thePhoneId};
	    ctrl = $controller('PhoneDetailCtrl', {$scope:scope, $routeParams:routeParam});
	}));

	it('should has the specification of phone ' + thePhoneId, function() {
	    expect(ctrl.phone).toEqualData({});
	    $httpBackend.flush();

	    var expectedPhone = thePhone;
	    expect(ctrl.phone).toEqualData(expectedPhone);
	});

	it('should has mainImageUrl property ', function() {
	    var expectedPhone = thePhone;
	    expect(ctrl.mainImageUrl).toBeUndefined();
	    $httpBackend.flush();
	    expect(ctrl.mainImageUrl).toBe(expectedPhone.images[0]);
	});

	it('should set mainImageUrl property ', function() {
	    var expectedPhone = thePhone;
	    expect(ctrl.setImage).toBeDefined();
	    $httpBackend.flush();
	    ctrl.setImage(thePhone.images[1]);
	    expect(ctrl.mainImageUrl).toBe(expectedPhone.images[1]);
	});

    });

});
