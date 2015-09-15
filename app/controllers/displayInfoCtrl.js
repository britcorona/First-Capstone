define([
	'angular',
	'firebase',
	'angularRoute'
], function(angular, firebase, angularRoute) {
	angular.module("CapstoneApp.displayInfoCtrl", ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.when('/info', {
				templateUrl: '../partials/info.html',
				controller: 'infoCtrl',
				controllerAs: 'displayInfoCtrl'
			});
		}])
		.controller("infoCtrl", ["$scope", "$firebaseArray", "$routeParams", function($scope, $firebaseArray, $routeParams) {

		 //This will connect to firebase and get the info
		  var ref = new Firebase("https://first-capstone.firebaseio.com/vehicles");

		 // download the data into a local object
		  $scope.vehicles = $firebaseArray(ref);

		  $scope.id = $routeParams.songId;

	}]);
});