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
		.controller("checklistCtrl", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {

			//This will connect to firebase and get the info
		  var ref = new Firebase("https://first-capstone.firebaseio.com/todos");

		 // download the data into a local object
		  $scope.todos = $firebaseArray(ref);

		  //Add a checklist item
		$scope.addToDo = function() {
			$scope.todos.$add({
				name: $scope.newToDo.name,
				date: $scope.newToDo.date, 
				odometer: $scope.newToDo.odometer
			});
			//This will clear the boxes in the form once the add button is clicked.
			$scope.newToDo = {"":""};
		};


	}]);
});