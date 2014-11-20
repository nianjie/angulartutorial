'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

  it("should do something", function() {

  });

});

describe('PhoneListCtrl', function() {
  var scope, ctrl;

  beforeEach(module('phonecatApp'));

  beforeEach(inject(function($controller) {
      scope = {}, 
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
  }));

  it("should create 'phones' model with 3 phones", function() {
      expect(ctrl.phones.length).toBe(3);

  });

  it("should set the default value of orderProp property", function() {
      expect(ctrl.orderProp).toBe('age');
  });

});
