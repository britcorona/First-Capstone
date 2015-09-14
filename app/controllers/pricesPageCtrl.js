define([
	'angular',
	'firebase',
	'angularRoute',
], function(angular, firebase, angularRoute) {
	angular.module("CapstoneApp.PricesPageCtrl", ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.when('/prices', {
				templateUrl: '../partials/prices-page.html',
				controller: 'pricesCtrl',
				controllerAs: 'PricesPageCtrl'
			});
		}])
		.controller("pricesCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

		 //This will connect to firebase and get the info
		  var ref = new Firebase("https://first-capstone.firebaseio.com/vehicles");

		 //  // download the data into a local object
		  $scope.vehicles = $firebaseArray(ref);

	}]);
});