define([
	'angular',
	'firebase',
	'angularRoute'
], function(angular, firebase, angularRoute) {
	angular.module("CapstoneApp.ChecklistPageCtrl", ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.when('/checklist', {
				templateUrl: '../partials/checklist-page.html',
				controller: 'checklistCtrl',
				controllerAs: 'ChecklistPageCtrl'
			});
		}])
		.controller("checklistCtrl", ["$scope", function($scope) {
	}]);
});