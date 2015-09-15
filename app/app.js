define([
	'angular',
	'angularRoute',
	'angularFire',
	'jquery',
	'controllers/firstPageCtrl',
	'controllers/pricesPageCtrl',
	'controllers/checklistPageCtrl',
	'controllers/displayInfoCtrl'
], function(angular, angularRoute, angularFire, jquery, firstCtrl, pricesCtrl, checklistCtrl, infoCtrl) {
	return angular.module("CapstoneApp", [
		'ngRoute',
		'firebase',
		'CapstoneApp.FirstPageCtrl',
		'CapstoneApp.PricesPageCtrl',
		'CapstoneApp.ChecklistPageCtrl',
		'CapstoneApp.displayInfoCtrl'
	]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		otherwise({
			redirectTo: '/'
		});

	}]);
});
console.log("app.js file is loaded");