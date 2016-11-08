"use strict";
//function to read our files
function readFile(filename){
	return ASQ(function(done){
		var stream = fs.createReadStream(filename);
		var contents = "";

		//streams can be piped
		stream.pipe( fs.createWriteStream(filename + ".backup"));

		//event listener
		stream.on("data", function(chunk){
			contents += chunk;
		});
		stream.on("end", function(){
			done(contents);
		});
	});
}

function delayMsg(done, contents){
	setTimeout(function(){
		done(contents);
	}, 1000);
}

function say(filename){
	return readFile(filename)
	.then(delayMsg);
}

//built-in module fs
var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

//everything in file is assumed to be private
//public api is declared with module.exports
module.exports.say = say;