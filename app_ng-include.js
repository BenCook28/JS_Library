var myCountryApp = angular.module('myCountryApp', []);

myCountryApp.controller('countryController', ['$scope', function($scope){
	$scope.message = "hey y'all";

	$scope.countries = [
	{
		name: "Chile",
		corrupton: "low",
		pay: 70000
	}, 
	{
		name: "Bulgaria",
		corrupton: "high",
		pay: 14000
	},
	{
		name: "Panama",
		corrupton: "moderate",
		pay: 50000
	},
	{
		name: "Singapore",
		corrupton: "low",
		pay: 60000
	}
];



	 // 'Bulgaria', 'Panama', 'Singapore'];
}]);