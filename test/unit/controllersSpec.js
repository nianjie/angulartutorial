'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

  it("should do something", function() {

  });

});

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
    var scope, routeParam, ctrl;

    beforeEach(module('phonecatControllers'));

    beforeEach(inject(function($controller) {
	scope = {};
	routeParam = {'phoneId':'phoneid-1'};
	ctrl = $controller('PhoneDetailCtrl', {$scope:scope, $routeParams:routeParam});
    }));

    it('should set the value of phoneId property', function() {
	expect(ctrl.phoneId).toBe('phoneid-1');
    });
});
