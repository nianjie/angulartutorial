'use strict';

/* Controllers */
var app = angular.module('phonecatApp',[ ]);

app.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    var self = this;
    $http.get('phones/phones.json').success(function(data) {
	self.phones = data;
    });
    this.orderProp = 'age';
}]);
