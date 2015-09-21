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
				odometer: $scope.newToDo.odometer,
				notes: $scope.newToDo.notes
			});
			//This will clear the boxes in the form once the add button is clicked.
			$scope.newToDo = {"":""};
		};


		$scope.settingChecked = function(todo) {
			//console.log('todo', todo);
			if ( todo.checked === false) {
				ref.child(todo.$id).update({'checked': true});
			} else {
				ref.child(todo.$id).update({'checked': false});
			}
		};


		var menuH = $('.menu').height();
			$('.menu').css('top', -menuH);

			var animating = false;

			$('.toggle-bar').on('click', function () {
		    if (!animating) {
	        animating = true;
	        if ($('.menu').css('top') == (-menuH) + 'px') {
            $('.container').stop().animate({'height': menuH + 30});
            $('.menu').stop().animate({'top': 30}, 500, function () {
              animating = false;
          	});
	        } else {
            $('.container').stop().animate({'height': 30});
            $('.menu').stop().animate({'top': -menuH}, 500, function () {
              animating = false;
            });
	        }
		    }
			});


	}]);
});