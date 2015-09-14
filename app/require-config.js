require.config({
	paths: {
		angular: "../lib/bower_components/angular/angular.min",
		angularRoute: "../lib/bower_components/angular-route/angular-route",
		angularFire: "../lib/bower_components/angularfire/dist/angularfire.min",
		firebase: "../lib/bower_components/firebase/firebase",
		jquery: "../lib/bower_components/jquery/dist/jquery.min",
		bootstrap: "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
  shim: {
  	'angularFire': ['angular', 'firebase'],
		'angular' : {'exports' : 'angular'},
		'bootstrap': ['jquery'],
		'angularRoute': ['angular']
	}
});

require([
	'angular',
	'app'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('body')[0]);
		angular.element($html).ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['CapstoneApp']);
		});
	});