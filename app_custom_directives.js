var myCountryApp = angular.module('myCountryApp', ['ngRoute']);

myCountryApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'countryController'
		})
		//normally we'd create a seperate home controller file
		//here we reuse the countryController for simplicity
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'countryController'
		}).otherwise({
			redirectTo: '/home'
		});

}]);

//define directive functionality
myCountryApp.directive('randomCountry', [function(){

	return {
		//restrict directive to be used in a certain way, A, E, C, or M
		//E stands for element and means we can only use a directive as an element
		//A means we can only use a directive as an attribute, C and M are legacy

		restrict: 'E',
		//where we pass data into a a directive, directive has its own scope
		scope: {
			// = means binding data together, gets from directory
			countries: '=',
			title: '='
		},
		//make template
		templateUrl: 'views/random.html',
		// template: '<img ng-src="{{countries[random].thumb}}">',
		//pulls from line 30 scope (or in randomCountry return if I add lines)
		controller: function($scope){
			$scope.random = Math.floor(Math.random() * 4);
		}
	};

}]);
// use http by passing it in as a dependency
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

	$http.get('data/countries.json').then(function(data){
		console.log(data);
		//data contains multiple objects, including the data itself, status code, etc.
		$scope.countries = data.data;
	});
}]);