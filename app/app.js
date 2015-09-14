define([
	'angular',
	'angularRoute',
	'angularFire',
	'controllers/firstPageCtrl',
	'controllers/pricesPageCtrl',
	'controllers/checklistPageCtrl'
], function(angular, angularRoute, angularFire, firstCtrl, pricesCtrl, checklistCtrl) {
	return angular.module("CapstoneApp", [
		'ngRoute',
		'firebase',
		'CapstoneApp.FirstPageCtrl',
		'CapstoneApp.PricesPageCtrl',
		'CapstoneApp.ChecklistPageCtrl'
	]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		otherwise({
			redirectTo: '/'
		});

	}]);
});
console.log("app.js file is loaded");