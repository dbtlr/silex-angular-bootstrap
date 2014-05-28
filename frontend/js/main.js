requirejs.config({
    baseUrl: '/js/app',
    paths: {
        angular: '/js/libs/angular/angular.min',
        angularResource: '/js/libs/angular/angular-resource.min',
        angularRoute: '/js/libs/angular/angular-route.min',
        angularAnimate: '/js/libs/angular/angular-animate.min'
    },
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularResource': ['angular'],
		'angularAnimate': ['angular']
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

// Start loading the main app file. Put all of
// your application logic in there.
require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});