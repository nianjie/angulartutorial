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

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
function($scope, $routeParams) {
    var self = this;
    this.phoneId = $routeParams.phoneId;
}]);
