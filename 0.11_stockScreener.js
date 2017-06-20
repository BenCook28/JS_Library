var fs = require('fs');

/*

request = prepare_the_request();
send_request_asynchronously (request, function(response){
display(response);
});
*/

function getStocks(filepath, done){
	// telling file system to read a file that the user of the function passes into as an argument.
	// Then we create a callback to handle that case.
	fs.readFile(filepath, function(err, stocks){
		// error handling
		console.log("hi");
		if (err) return done(err);

		fs.readFile('0.11_stocks.dictionary', function(err, dict){
			// error handling
			if (err) return done(err);

			getStocks(stocks, dict);
		})
	})
	var getStocks = function (stocks, dict){
	// turn the items from these files into arrays then split them
	dict = dict.toString().split('\n');
	stocks = stocks.toString().split('\n').filter(function(stocks){
		// going over the dictionary, then it's checking if the bulls are located
		// inside of the dictionary. If so, then it's returning that value.
		return dict.indexOf(stocks) !== -1;
	});
	done(stocks);
	}
}
// variable way

getStocks('0.11_stocks.txt', function(stocks){
	// if (err) return done(err);

	console.log(stocks);	
})