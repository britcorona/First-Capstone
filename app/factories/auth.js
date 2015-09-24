define([
	'angular',
	'firebase',
	'angularRoute'
], function(angular, firebase, angularRoute) {
	angular.module("CapstoneApp.Auth", ['ngRoute']).factory("Auth", ["$firebaseAuth",
	  function($firebaseAuth) {
	    var ref = new Firebase("https://first-capstone.firebaseio.com/");
	    return $firebaseAuth(ref);
	  }
	]);
});