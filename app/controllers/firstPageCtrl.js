define([
	'angular',
	'firebase',
	'angularRoute'
], function(angular, firebase, angularRoute) {
	angular.module("CapstoneApp.FirstPageCtrl", ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.when('/', {
				templateUrl: '../partials/first-page.html',
				controller: 'firstCtrl',
				controllerAs: 'FirstPageCtrl'
			});
		}])
		.controller("firstCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

	}]);
});