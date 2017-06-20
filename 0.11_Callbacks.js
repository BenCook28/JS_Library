var fs = require('fs');

/*

request = prepare_the_request();
send_request_asynchronously (request, function(response){
display(response);
});
*/
// getBulls([path], callback)
function getBulls(filepath, done){
	// telling file system to read a file that the user of the function passes into as an argument.
	// Then we create a callback to handle that case.
	fs.readFile(filepath, function(err, bulls){
		// error handling
		if (err) return done(err);

		fs.readFile('0.11_bulls.dictionary', function(err, dict){
			// error handling
			if (err) return done(err);

			compareBulls(bulls, dict);
		})
	})
	var compareBulls = function (bulls, dict){
	// turn the items from these files into arrays then split them
	dict = dict.toString().split('\n');
	bulls = bulls.toString().split('\n').filter(function(bulls){
		// going over the dictionary, then it's checking if the bulls are located
		// inside of the dictionary. If so, then it's returning that value.
		return dict.indexOf(bulls) !== -1;
	});
	done(bulls);
	}
}
// variable way

getBulls('0.11_bulls.txt', function(bulls){
	// if (err) return done(err);

	console.log(bulls);	
})

// another type of callback

console.log("Hey tell me your name?");
var printNameInThreeSeconds = setTimeout(function(){
	console.log("Bryce");
}, 3000);
console.log("nice to meet you!");