var myCountryApp = angular.module('myCountryApp', []);

myCountryApp.controller('countryController', ['$scope', function($scope){
	
	$scope.countries = [
	{
		name: "Chile",
		corrupton: "low",
		pay: 70000,
		contacts: true
	}, 
	{
		name: "Bulgaria",
		corrupton: "high",
		pay: 14000,
		contacts: true
	},
	{
		name: "Panama",
		corrupton: "moderate",
		pay: 50000,
		contacts: false
	},
	{
		name: "Singapore",
		corrupton: "low",
		pay: 60000,
		contacts: true
	}
];



	 // 'Bulgaria', 'Panama', 'Singapore'];
}]);