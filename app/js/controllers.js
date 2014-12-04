'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers',[ ]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
function($scope, Phone) {
    var self = this;
    self.phones = Phone.query();
    this.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', 
function($scope, $routeParams, Phone) {
    var self = this;
    self.phone = Phone.get({phoneId:$routeParams.phoneId}, function(phone) {
	self.mainImageUrl = phone.images[0];
    });
    
    this.setImage = function(imageUrl) {
	this.mainImageUrl = imageUrl;
    };
}]);
