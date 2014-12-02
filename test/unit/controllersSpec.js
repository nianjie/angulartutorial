'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

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

	it("should create 'phones' model with 3 phones", function() {
	    expect(ctrl.phones).toBeUndefined();
	    $httpBackend.flush();

	    expect(ctrl.phones).toEqual([{name:'Nexus S'}, {name:'Motorola DROID'}]);

	});

	it("should set the default value of orderProp property", function() {
	    expect(ctrl.orderProp).toBe('age');
	});

    });

    describe('PhoneDetailCtrl', function() {
	var scope, routeParam, ctrl, $httpBackend;
	var thePhone = {name: 'Dell Streak 7'}, thePhoneId='dell-streak-7';

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
	    expect(ctrl.phone).toBeUndefined();
	    $httpBackend.flush();

	    var expectedPhone = thePhone;
	    expect(ctrl.phone).toEqual(expectedPhone);
	});
    });

});
