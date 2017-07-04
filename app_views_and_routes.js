//declare ngRoute dependency
//sort out routing in the controller
//config runs before the program starts
var myCountryApp = angular.module('myCountryApp', ['ngRoute']);
//pass in dependencies in an array to protect from minification
//routeProvider is an object in ngRoute which lets us set up routes
myCountryApp.config(['$routeProvider', function($routeProvider){
	//when the user visits home, use properties
	$routeProvider
		.when('/home', {
			//specifiy the view
			templateUrl: 'views/home.html'
		})
		.when('/directory', {
			templateUrl: 'views/directory.html',
			//controller property
			controller: 'countryController'
		}).otherwise({
			redirectTo: '/home'
		})

}])

myCountryApp.controller('countryController', ['$scope', function($scope){

	$scope.removeCountry = function(country){
		var removedCountry = $scope.countries.indexOf(country);
		$scope.countries.splice(removedCountry, 1);
	};
	$scope.addCountry = function(){
		$scope.countries.push({
			name: $scope.newCountry.name,
			corruption: $scope.newCountry.corruption,
			pay: parseInt($scope.newCountry.pay),
			contacts: true,
			colorCode: "red"
		});
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
}]);