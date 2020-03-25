var ANSWERS 		= ["rock", "paper", "scissors"];

var userAnswer 			= ANSWERS[1],
	m					= 0,
	n 					= ANSWERS.length - 1,
	randomAnswerIndex	= Math.floor(Math.random() * (n - m + 1)) + m,
	computerAnswer		= ANSWERS[randomAnswerIndex],
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
		"-1" : "Лошара!",
		"0"	 : "It's draw",
		"1"	 : "Yeaaah!"
	};


console.log("Ответ пользователя:", userAnswer);
console.log("Ответ компьютера:", computerAnswer);
console.log("Результат игры:", messages[tableResults[userAnswer][computerAnswer]]);