var smartCar = {};
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};
smartCar.mpg = smartCarMPG(300, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());