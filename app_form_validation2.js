//Add animate as a dependency
var myCountryApp = angular.module('myCountryApp', ['ngRoute', 'ngAnimate']);

myCountryApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'countryController'
		})
		//service for contact url, no controller
		.when('/contact', {
			templateUrl: 'views/contact.html'
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
	//add remove all function to Scope
	$scope.removeAll = function(){
		$scope.countries = [];
	};

	$http.get('data/countries.json').then(function(data){
		console.log(data);
		$scope.countries = data.data;
	});
}]);