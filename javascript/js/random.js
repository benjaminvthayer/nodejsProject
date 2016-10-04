// 1. Add an on click event to the element with the dice id

// 2. Get a random number between 1 and 6

// 3. Put the random number into the dice element text


document.getElementById("dice").addEventListener("click", function(){
	var num = Math.random()*(5)+1;
	document.getElementById("dice").innerHTML=(Math.round(num));
});
