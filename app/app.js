define([
	'angular',
	'angularRoute',
	'angularFire',
	'jquery',
	'controllers/firstPageCtrl',
	'controllers/pricesPageCtrl',
	'controllers/checklistPageCtrl',
	'controllers/displayInfoCtrl',
	'controllers/loginCtrl',
	'factories/auth'
], function(angular, angularRoute, angularFire, jquery, firstCtrl, pricesCtrl, checklistCtrl, infoCtrl, authFact, loginCtrl) {
	return angular.module("CapstoneApp", [
		'ngRoute',
		'firebase',
		'CapstoneApp.FirstPageCtrl',
		'CapstoneApp.PricesPageCtrl',
		'CapstoneApp.ChecklistPageCtrl',
		'CapstoneApp.displayInfoCtrl',
		'CapstoneApp.LoginCtrl',
		'CapstoneApp.Auth'
	]).run(["$rootScope", "$location", function($rootScope, $location) {
$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
  // We can catch the error thrown when the $requireAuth promise is rejected
  // and redirect the user back to the home page
  if (error === "AUTH_REQUIRED") {
    $location.path("/login");
  }
});
}])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		otherwise({
			redirectTo: '/'
		});

	}]);
});
//console.log("app.js file is loaded");