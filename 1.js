"use strict";

function printHelp(){
	console.log("2.js");
	console.log("");
	console.log("usage:");
	console.log("--help 					print this help");
	console.log("--file={NAME}    read the file of {NAME} and output");
}

var args = require("minimist")(process.argv.slice(2),{ string: "file" });
//will parse arguments list for us, returns a function that we can call
//argv is an array of arguments in the command line

if(args.help || !args.file){
	printHelp();
	process.exit();
}

var hello = require("./helloworld.js");

//first argument in callback is saved for errors
//pass a callback to the module so it can work asynchronously
hello.say(args.file, function(err, contents){
	//handle error
	if(err){
		console.error("Error: " + err);
	}
	else{
		console.log(contents.toString());
	}
});