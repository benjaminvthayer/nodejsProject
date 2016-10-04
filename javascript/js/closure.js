// 1. Put an on click listen event on each of the buttons
//
// 2. On click it will print out on the console it's name or internal text using a javascript closure
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


function logName(name){
	document.getElementById(name).addEventListener("click", function(){
		console.log(name);
	});
}

var first=logName("first");
var second=logName("second");
var third=logName("third");