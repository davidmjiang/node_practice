"use strict";
//function to read our files
function say(filename, cb){
	//this will be returned as an array buffer
	//this is async, 2nd parameter is a callback function
	return fs.readFile(filename, function(err, contents){
		if(err){
			cb(err);
		}
		else{
			setTimeout(function(){
				cb(null, contents);
			}, 1000);
		}
	});
}

//built-in module fs
var fs = require("fs");

//everything in file is assumed to be private
//public api is declared with module.exports
module.exports.say = say;