var myCountryApp = angular.module('myCountryApp', []);

myCountryApp.controller('countryController', ['$scope', function($scope){

	$scope.removeCountry = function(country){
		var removedCountry = $scope.countries.indexOf(country);
		$scope.countries.splice(removedCountry, 1);
	};
	//add the form data from the view into the scope array below
	$scope.addCountry = function(){
		$scope.countries.push({
			name: $scope.newCountry.name,
			corruption: $scope.newCountry.corruption,
			//parseInt is a JS function to turn a string into an int.
			pay: parseInt($scope.newCountry.pay),
			contacts: true,
			colorCode: "red"
		});
		//clear the form after we add a new country
		$scope.newCountry.name = "";
		$scope.newCountry.corruption = "";
		$scope.newCountry.pay = "";
		// $scope.newCountry.contacts = "";
		// $scope.newCountry.colorCode = "";
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