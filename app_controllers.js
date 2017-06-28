// modules are containers for code
//dependencies go in the square bracket
var myCountryApp = angular.module('myCountryApp', []);
//config files run before the program
// myCountryApp.config(function(){

// });
//run files run as the program fires
// myCountryApp.run(function(){

// });
//controllers act as middlemen between the view and model
//the square brackets around function($scope) maintain scope's functionality
//if minification occurs. dependencies in ''.
myCountryApp.controller('countryController', ['$scope', function($scope){
	$scope.message = "hey y'all";

	$scope.countries = ['Chile', 'Bulgaria', 'Panama', 'Singapore'];
}]);