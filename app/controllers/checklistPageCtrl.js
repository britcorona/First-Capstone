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
				controllerAs: 'ChecklistPageCtrl',
				resolve: {
		    // controller will not be loaded until $waitForAuth resolves
		    // Auth refers to our $firebaseAuth wrapper in the example above
		    "currentAuth": ["Auth", function(Auth) {
		      // $waitForAuth returns a promise so the resolve waits for it to complete
		      return Auth.$requireAuth();
		    }]
			  }
			});
		}])
		.controller("checklistCtrl", ["$scope", "$firebaseArray", "currentAuth", function($scope, $firebaseArray, currentAuth) {

			//This will connect to firebase and get the info
		  var ref = new Firebase("https://first-capstone.firebaseio.com/todos");

		 // download the data into a local object
		  $scope.todos = $firebaseArray(ref);

		  //Add a checklist item
		$scope.addToDo = function() {
			$scope.todos.$add({
				name: $scope.newToDo.name,
				date: $scope.newToDo.date, 
				odometer: $scope.newToDo.odometer,
				notes: $scope.newToDo.notes
			});
			//This will clear the boxes in the form once the add button is clicked.
			$scope.newToDo = {"":""};
		};

		//Sets a true value for checklist item to move to the History div.
		$scope.settingChecked = function(todo) {
			//console.log('todo', todo);
			if ( todo.checked === false) {
				ref.child(todo.$id).update({'checked': true});
			} else {
				ref.child(todo.$id).update({'checked': false});
			}
		};

		$('#twitterOut').on('click', function() {
			var nextRef = new Firebase("https://first-capstone.firebaseio.com");
			nextRef.unauth();
		});

	}]);
});