function check(){

    var question1 = document.quiz.question1.value;
  	var question2 = document.quiz.question2.value;
  	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question4.value;
  	var correct = 0;
    var incorrect = 0;

	if (question1 == "mitochondria") {
		correct++;
} else {
  incorrect--;
}
	if (question2 == "energy") {
		correct++;
} else {
  incorrect--;
}
	if (question3 === "structure") {
		correct++;
	} else {
    incorrect--;
}

if (question4 == "atp") {
  correct++;
} else {
incorrect--;
}

if (question5 == "3") {
  correct++;
} else {
incorrect--;
}


	var pictures = ["img/borat.jpg", "img/fail.jpeg", "img/okay.jpeg"];
	var messages = ["Great job!", "Meh...", "That is okay!"];
	var score;

	if (correct === 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct === 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
