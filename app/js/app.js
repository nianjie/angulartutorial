'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
		    function($routeProvider) {
			$routeProvider.
			    when('/phones', {
				templateUrl: 'partials/phone-list.html',
				controller: 'PhoneListCtrl',
				controllerAs: 'phonelist'
			    }).
			    when('/phones/:phoneId', {
				templateUrl: 'partials/phone-detail.html',
				controller: 'PhoneDetailCtrl',
				controllerAs: 'phone'
			    }).
			    otherwise({
				redirectTo: '/phones'
			    });
		    }]);
