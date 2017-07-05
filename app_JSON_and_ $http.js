var myCountryApp = angular.module('myCountryApp', ['ngRoute']);

myCountryApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			controller: 'countryController'
		}).otherwise({
			redirectTo: '/home'
		})

}])
// use http by passing it in as a dependency
myCountryApp.controller('countryController', ['$scope', '$http', function($scope, $http){
	console.log("Hello")
	$scope.removeCountry = function(country){
		var removedCountry = $scope.countries.indexOf(country);
		$scope.countries.splice(removedCountry, 1);
	};

	$scope.addCountry = function(){
		//Base object
		var country = {
			name: $scope.newCountry.name,
	 		corruption: $scope.newCountry.corruption,
	 		pay: parseInt($scope.newCountry.pay),
	 		contacts: true,
			colorCode:""
		}

		//Variables to store info on corruption
		var corruption = $scope.newCountry.corruption;
		var color;

		//Decide what color should be
		if(corruption == "high"){
			color = "red"
		} else if(corruption == "moderate"){
			color = "yellow"
		} else{
			color = "lightgreen"
		}

		//Set color code in object
		country.colorCode = color;

		//Push to the list
		$scope.countries.push(country);

		$scope.newCountry.name = "";
		$scope.newCountry.corruption = "";
		$scope.newCountry.pay = "";
	};
	
		$scope.countries = [
		{
			name: "Chile",
			corruption: "low",
			pay: 70000,
			contacts: true,
			colorCode: "lightgreen",
			thumb: "img/Chile.jpg"
		}, 
		{
			name: "Bulgaria",
			corruption: "high",
			pay: 14000,
			contacts: true,
			colorCode: "red",
			thumb: "img/Bulgaria.jpg"
		},
		{
			name: "Panama",
			corruption: "moderate",
			pay: 50000,
			contacts: false,
			colorCode: "lightyellow",
			thumb: "img/Panama.jpg"
		},
		{
			name: "Singapore",
			corruption: "low",
			pay: 60000,
			contacts: true,
			colorCode: "lightgreen",
			thumb: "img/Singapore.jpg"

		}
	];
	// move the array to an array to JSON, then call it
	// the method below quickly converts to JSON format
	console.log("Hello")
	console.log(angular.tojson($scope.countries));
	console.log($scope.countries).tojson;

	//if success, gets data, data is everything in the JSON file
	$http.get('data/countries.json').success(function(data){
		$scope.countries = data;
	})
}]);