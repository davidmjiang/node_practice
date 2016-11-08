"use strict";
//function to read our files
function readFile(filename){
	//creates an empty sequence
	var sq = ASQ();
	
	fs.readFile(filename);

	return sq;
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