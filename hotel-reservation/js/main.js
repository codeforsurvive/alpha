var app = angular.module('myApp', []);


app.controller('MyController', ['$scope', '$http', function($scope, $http) {
	
	$scope.data = [];

	$scope.init = function(){

		$http.get('http://192.168.0.120:81/thesis_service/public/metric').
        success(function(data) {
           alert(data);
        });

	}

}]);

app.run(function($rootScope) {
  $rootScope.name = "Ari Lerner";
});
