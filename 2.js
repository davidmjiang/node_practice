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

var hello = require("./helloworld2.js");

hello.say(args.file)
.val(function(contents){
	console.log(contents.toString());
})
.or(function(err){
	console.error("Error: " + err);
});