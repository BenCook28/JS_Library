var myCountryApp = angular.module('myCountryApp', ['ngRoute', 'ngAnimate']);

//location provider makes pretty urls possible
myCountryApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	
	$locationProvider.html5Mode(true);

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'countryController'
		})
		//module 18, added contact controller
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		.when('/contact-success', {
			templateUrl: 'views/contact-success.html',
			controller: 'ContactController'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'countryController'
		}).otherwise({
			redirectTo: '/home'
		});

}]);

myCountryApp.directive('randomCountry', [function(){

	return {

		restrict: 'E',
		scope: {
			countries: '=',
			title: '='
		},
		templateUrl: 'views/random.html',
		transclude: true,
		replace: true,
		controller: function($scope){
			$scope.random = Math.floor(Math.random() * 4);
		}
	};

}]);
myCountryApp.controller('countryController', ['$scope', '$http', function($scope, $http){
	console.log("Hello")
	$scope.removeCountry = function(country){
		var removedCountry = $scope.countries.indexOf(country);
		$scope.countries.splice(removedCountry, 1);
	};

	$scope.addCountry = function(){
		var country = {
			name: $scope.newCountry.name,
	 		corruption: $scope.newCountry.corruption,
	 		pay: parseInt($scope.newCountry.pay),
	 		contacts: true,
			colorCode:""
		}

		var corruption = $scope.newCountry.corruption;
		var color;

		if(corruption == "high"){
			color = "red"
		} else if(corruption == "moderate"){
			color = "yellow"
		} else{
			color = "lightgreen"
		}

		country.colorCode = color;

		$scope.countries.push(country);

		$scope.newCountry.name = "";
		$scope.newCountry.corruption = "";
		$scope.newCountry.pay = "";
	};

	$scope.removeAll = function(){
		$scope.countries = [];
	};

	$http.get('data/countries.json').then(function(data){
		console.log(data);
		$scope.countries = data.data;
	});
}]);
//contact controller, added module 18
myCountryApp.controller('ContactController', ['$scope', '$location', function($scope, $location){
	//send to contact success
	$scope.sendMessage = function(){
		$location.path('contact-success')
	}

}])