angular.module("app").controller('ResultController', function($scope, $rootScope, $location) {

	$scope.book = function(nama){
		var pesan = nama+" is successfully booked.";
		$.growl.notice({title: "[INFO]", message: pesan });
	};

	$scope.error = {
		title: '404 - Not Found!',
		header: 'Page Found!',
		message: "Sorry, the requested page not found!"

	};

	$scope.error = {
		title: '404 - Not Found!',
		header: 'Page Found!',
		message: "Sorry, the requested page not found!"

	};

	$scope.data = [];
	$scope.init = function() {
		$rootScope.navigation.currentPage = 1;
		$rootScope.navigation.backlinkRoute = "#/home";
		$scope.data = [
			{
				'id': 1,
				'type': 1,
				'name': 'Bedroom Executive',
				'img': 'pict/kamar1_.jpg',
				'description': 'The 64 sqm One-Bedroom Executive offers a separate bedroom, living room, kitchen and dining area, bathroom and utility area, a private balcony, and washing machine (on request). It can accommodate a maximum of two people. Free wifi internet connection in room and breakfast for two people.',
				'rating': 5,
				'rating_img': 'pict/stars-5.png',
				'data_context': 'stars-5',
				'currency': 'IDR',
				'price': '5000000'
			},
			{
				'id': 2,
				'type': 1,
				'name': 'Bedroom Penthouse',
				'img': 'pict/kamar2_.jpg',
				'description': 'One-Bedroom Penthouse is 6% larger than One Bedroom Executive. This room offers the same facilities as One bedroom executive but in addition it eqquiped with TV in Master Bedroom and Extra Balcony. Free wifi internet connection in room and breakfast for two people.',
				'rating': 4,
				'rating_img': 'pict/stars-4.png',
				'data_context': 'stars-4',
				'currency': 'IDR',
				'price': '4000000'
			},
			{
				'id': 3,
				'type': 2,
				'name': 'Bedroom Deluxe',
				'img': 'pict/kamar4_.jpg',
				'description': 'This room is 4 sqm larger than Two-Bedroom Superior and features all amenities mentioned above. In addition it also eqquiped with bathub and TV in Master Bedroom. It can accommodate a maximum of three people. Also includes breakfast for two people and free wifi internet access.',
				'rating': 4,
				'rating_img': 'pict/stars-4.png',
				'data_context': 'stars-4',
				'currency': 'IDR',
				'price': '4000000'
			},
			{
				'id': 4,
				'type': 3,
				'name': 'Bedroom Penthouse',
				'img': 'pict/kamar5_.jpg',
				'description': 'Perfect for family! Spacious 90 sqm Three-Bedroom Suite offers three separate bedrooms, living room, kitchen and dining area, bathroom and utility area, a private balcony, and washing machine (on request). It includes breakfast for three people, free wifi internet connection in room and access to swimming pool and mini-gym.',
				'rating': 3,
				'rating_img': 'pict/stars-3.png',
				'data_context': 'stars-3',
				'currency': 'IDR',
				'price': '5000000'
			},
			{
				'id': 5,
				'type': 2,
				'name': 'Bedroom Superior',
				'img': 'pict/kamar3_.jpg',
				'description': 'The 74 sqm Two-Bedroom Superior features two separate bedrooms, living room, kitchen and dining area, bathroom and utility area, a private balcony, and washing machine (on request),Bathroom Shower. It can accommodate a maximum of three people. Also includes breakfast for two people and free wifi internet access.',
				'rating': 4,
				'rating_img': 'pict/stars-4.png',
				'data_context': 'stars-4',
				'currency': 'IDR',
				'price': '3000000'
			}
		];
	};

});