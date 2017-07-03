var myCountryApp = angular.module('myCountryApp', []);

myCountryApp.controller('countryController', ['$scope', function($scope){

	$scope.removeCountry = function(country){
		// references the $scope.countries array below
		//indexOf gets the index value
		//splice removes, first argument is starting point, second is how many to remove
		var removedCountry = $scope.countries.indexOf(country);
		$scope.countries.splice(removedCountry, 1);
	}
	
		$scope.countries = [
		{
			name: "Chile",
			corruption: "low",
			pay: 70000,
			contacts: true,
			colorCode: "lightgreen"
		}, 
		{
			name: "Bulgaria",
			corruption: "high",
			pay: 14000,
			contacts: true,
			colorCode: "red"
		},
		{
			name: "Panama",
			corruption: "moderate",
			pay: 50000,
			contacts: false,
			colorCode: "lightyellow"
		},
		{
			name: "Singapore",
			corruption: "low",
			pay: 60000,
			contacts: true,
			colorCode: "lightgreen"

		}
	];
}]);