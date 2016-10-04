// 1. Ask the user at least four questions and get their input
//
// 2. Keep track of the number of questions that are answered correctly
//
// 3. Write out a message to the user to let them know the number of questions that were correct
//
// 4. Output a message to the element with a quiz-result id the user depending on their score
//    All 5 correct: Complete Success
//    3-4 correct: Almost Good Enough
//    1-2 correct: Sitting on the Edge
//    0 correct: Ultimate failure


document.getElementById("event").addEventListener("click",function(){
	var numCorr =0;
	function logName(field,correctAnswer){
		userAnswer = document.getElementById(field).value;
		if(userAnswer==correctAnswer) numCorr++;
	}

	logName("q1","snowboarding");
	logName("q2","yes");
	logName("q3","blue");
	logName("q4","yes");
	logName("q5","five");
	
	switch(numCorr){
		case 0:
			window.alert("Ultimate Failure!");
			break;
		case 2:
		case 1:
			window.alert("Sitting on the Edge");
			break;
		case 4:	
		case 3:
			window.alert("Almost Good Enough");
			break;
		case 5:
			window.alert("Complete Success");
			break;
		default:
			window.alert("something!!! alert something at least!!!!!!")
	}

});

