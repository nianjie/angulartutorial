'use strict';

/* Controllers */
var app = angular.module('phonecatApp',[ ]);

app.controller('PhoneListCtrl', function($scope) {
    this.phones = [
	{'name': 'Nexus S',
	 'snippet': 'Fast just got faster with Nexus S.',
	 'age':1
	},
	{'name': 'Motorola XOOM with Wi-Fi',
	 'snippet': 'The Next, Next Generation tablet.',
	 'age':2
	},
	{'name': 'Motorola XOOM ',
	 'snippet': 'The Next, Next Generation tablet.',
	 'age':3
	}
    ];
    this.orderProp = 'age';
});
