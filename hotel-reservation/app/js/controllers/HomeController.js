angular.module("app").controller('HomeController', function($scope, $rootScope, $location) {

	$scope.searchParams = {};
	$scope.tabs = [];
	$scope.selectedTab = {};

	$scope.search = function(){
		$location.path('/result');
	}

	$scope.init = function() {
		$rootScope.navigation.currentPage = 0;
		$rootScope.navigation.backlinkRoute = "#/home";
		$scope.searchParams.date = new Date();
		$scope.searchParams.checkIn = new Date();
		$scope.searchParams.checkOut = new Date();
		$scope.searchParams.rooms = 1;
		$scope.searchParams.guest = 1;
		$scope.hotels = [
			"Hotel 1",
			"Hotel 2",
			"Hotel 3"
		];
		for(var counter = 1; counter <= 3; counter++){
			$scope.tabs.push({ title: 'Hotel ' + counter, content: 'Tab ' + counter });
		}
		$scope.selectedTab = {
			"active": 'class="active"'
		};
	};

	 $scope.datepickers = {
        checkIn: false,
        checkOut: false
      }
	$scope.today = function() {
	   $scope.dt = new Date();

	 };
	 $scope.today();

	 $scope.clear = function () {
	   $scope.dt = null;
	 };

	 // Disable weekend selection
	 $scope.disabled = function(date, mode) {
	   return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	 };

	 $scope.toggleMin = function() {
	   $scope.minDate = $scope.minDate ? null : new Date();
	 };
	 $scope.toggleMin();
	 $scope.maxDate = new Date(2020, 5, 22);

	 $scope.open = function($event, target) {
	   $scope.datepickers[target] = true;
	 };

	 $scope.setDate = function(year, month, day) {
	   $scope.dt = new Date(year, month, day);
	 };

	 $scope.dateOptions = {
	   formatYear: 'yy',
	   startingDay: 1
	 };

	 $scope.formats = ['yyyy-MM-dd', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	 $scope.format = $scope.formats[0];

	 $scope.status = {
	   opened: {
	   	checkIn: false,
	   	checkOut: false
	   }
	 };

	 var tomorrow = new Date();
	 tomorrow.setDate(tomorrow.getDate() + 1);
	 var afterTomorrow = new Date();
	 afterTomorrow.setDate(tomorrow.getDate() + 2);
	 $scope.events =
	   [
	     {
	       date: tomorrow,
	       status: 'full'
	     },
	     {
	       date: afterTomorrow,
	       status: 'partially'
	     }
	   ];

	 $scope.getDayClass = function(date, mode) {
	   if (mode === 'day') {
	     var dayToCheck = new Date(date).setHours(0,0,0,0);

	     for (var i=0;i<$scope.events.length;i++){
	       var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	       if (dayToCheck === currentDay) {
	         return $scope.events[i].status;
	       }
	     }
	   }

	   return '';
	 };
});