define([
	'angular',
	'firebase',
	'angularRoute',
	'jquery'
], function(angular, firebase, angularRoute, $) {
	angular.module("CapstoneApp.LoginCtrl", ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
			.when('/login', {
				templateUrl: '../partials/login.html',
				controller: 'loginCtrl',
				controllerAs: 'LoginCtrl'
			});
		}])
		.controller("loginCtrl", ["$scope", "$firebaseArray", "$routeParams", "$location", function($scope, $firebaseArray, $routeParams, $location) {

			//When seeing the checklist page, it will redirect to a login page, once signed in, will display
			// the checklist page.
		$('#twitterButton').on('click', function() {
			var twitterRef = new Firebase("https://first-capstone.firebaseio.com");
			twitterRef.authWithOAuthPopup("twitter", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			    $location.path('/checklist');
			    $scope.$apply();
			  }
			});
		});


		//github auth
		$('#githubButton').on('click', function() {
			var githubRef = new Firebase("https://first-capstone.firebaseio.com");
			githubRef.authWithOAuthPopup("github", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData);
			    $location.path('/checklist');
			    $scope.$apply();
			  }
			});
		});


		//Google auth
	$('#googleButton').on('click', function() {
		var googleRef = new Firebase("https://first-capstone.firebaseio.com");
		googleRef.authWithOAuthPopup("google", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		    $location.path('/checklist');
		    $scope.$apply();
		  }
		});
	});


	$('#facebookButton').on('click', function() {
		var facebookRef = new Firebase("https://first-capstone.firebaseio.com");
		facebookRef.authWithOAuthPopup("facebook", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		    $location.path('/checklist');
		    $scope.$apply();
		  }
		});
	});

	}]);
});