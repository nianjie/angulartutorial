'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers',[ ]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
function($scope, $http) {
    var self = this;
    $http.get('phones/phones.json').success(function(data) {
	self.phones = data;
    });
    this.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', 
function($scope, $routeParams, $http) {
    var self = this;
    $http.get('phones/'+$routeParams.phoneId + '.json').success(function(data) {
	self.phone = data;
	self.mainImageUrl = data.images[0];
    });
    
    this.setImage = function(imageUrl) {
	this.mainImageUrl = imageUrl;
    };
}]);
