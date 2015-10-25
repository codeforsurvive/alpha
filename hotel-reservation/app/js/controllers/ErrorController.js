angular.module("app").controller('ErrorController', function($scope, $location) {

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
});