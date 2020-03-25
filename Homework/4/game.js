
//(function(){

console.log("Передайте в метод getUserNumber число от 0 до 2")
var 	ANSWERS 	= ["rock", "paper", "scissors"];

	function userResult() {
	 
	 	var number = 1;
	 	/*if(number === undefined || number > 3){ 
	 		return console.log("Передайте в метод getUserNumber число от 0 до 2");
	 	} else { */
	 	 	return ANSWERS[number];
	 	 	console.log(ANSWERS[number]);
	 //	};
	};

	function computerResult() {
		var	m					= 0,
			n 					= ANSWERS.length - 1,
			randomAnswerIndex	= Math.floor(Math.random() * (n - m + 1)) + m,
			computerAnswer		= ANSWERS[randomAnswerIndex];

		return computerAnswer;
		console.log(computerAnswer);
	};

	function resultOutput(userResult, computerResult) {
		tableResults = {
		"rock" : {
			"rock"		:  0,
			"paper"		: -1,
			"scissors"	:  1
		},

		"paper" : {
			"rock"		:  1,
			"paper"		:  0,
			"scissors"	: -1
		},

		"scissors" : {
			"rock"		: -1,
			"paper"		:  1,
			"scissors"	:  0
		}
		},

		messages = {
			"-1" : "Вы выиграли!",
			"0"	 : "Это ничья",
			"1"	 : "Вы победили!"
		};

	
		
		console.log("Ответ компьютера:", userResult);
		console.log("Ответ компьютера:", computerResult);
		console.log("Результат игры:", messages[tableResults[userResult][computerResult]]);
};
//})();