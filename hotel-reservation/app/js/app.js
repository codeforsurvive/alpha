var app = angular.module("app", ['ngRoute','ngAnimate', 'ui.bootstrap'])

.config(function($routeProvider) {
	$routeProvider
	.when('/', {redirectTo: '/home'})
	.when('/login', {
		templateUrl: 'login.html',
		controller: 'LoginController' })
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'HomeController' })
	.when('/result', {
		templateUrl: 'views/result.html',
		controller: 'ResultController' })
	.when('/error', {
		templateUrl: 'error.html',
		controller: 'ErrorController'

	})
	.otherwise({redirectTo: '/error'});
})
.run(function($rootScope) {

	$rootScope.navigation = {};
	$rootScope.init = function() {
		$rootScope.navigation.currentPage = 0;
		$rootScope.navigation.backlinkRoute = "#/home";
		$rootScope.navigation.paths = [];
	}

	
})
.controller('LoginController', function($scope) {

})

.controller('MenuController', function($scope) {


})

.controller('ErrorController', function($scope, $location) {

	$scope.error = {
		title: '404 - Not Found!',
		header: 'Page Found!',
		message: "Sorry, the requested page not found!"

	};

	$scope.init = function() {
		$scope.show404();
	};

	$scope.show404 = function() {
		$scope.error = {
			title: '404 - Not Found!',
			header: 'Page Not Found!',
			message: "Sorry, the requested page not found!"

		};
	};

	$scope.show403 = function() {
		$scope.error = {
			title: '403 - Forbidden!',
			header: 'Forbidden!',
			message: "Sorry, the requested page cannot be retreived!"

		};

	};

	$scope.show500 = function() {
		$scope.error = {
			title: '500 - Server Error!',
			header: 'Server Error!',
			message: "Sorry, the requested page server error!"

		};
	};

	$scope.show503 = function() {
			$scope.error = {
			title: '503 - Unauthorized!',
			header: 'Unauthorized Page!',
			message: "Sorry, you have no access to the requested page!"
		};
	};

	$scope.redirectHome = function () {
		
		$location.path('/home');
	}
})
;

