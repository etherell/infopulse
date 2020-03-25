//Преобраование игры в функцию
(function () {
function game(answer){ // Пользователь передаёт число от 0 до 2
	
	const ANSWERS 		= ["rock", "paper", "scissors"];
	var userAnswer 			= ANSWERS[answer]
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
			"-1" : "Вы проиграли",
			"0"	 : "Ничья",
			"1"	 : "Вы выиграли!"
		};


	console.log("Ответ пользователя:", userAnswer);
	console.log("Ответ компьютера:", computerAnswer);
	console.log("Результат игры:", messages[tableResults[userAnswer][computerAnswer]]);
};
}());


// Калькулятор
function calculator(num1, symbol, num2){ // Пользователь водит два числа и символ в виде строки
		var result = 0;

		if(symbol == "*"){
			result = num1 * num2
		} else if (symbol == "/"){
			result = num1 / num2
		} else if (symbol == "+"){
			result = num1 + num2
		} else if (symbol == "-"){
			result = num1 - num2
		};

		// Вывод результатов калькулятора
		console.log("Результат", result);
		return result;
};

//Расчет обоев. Пользователь вводит все необходимые данные и получает результат
function wallpaperCalculator(wallpaperLength, wallpaperWidth, roomHeight, roomPerimetr, windowHeight, windowWidth, doorHeight, doorWidth){
	
	var wallpaperArea 		= 0,
		wallsArea			= 0,
		widnowArea			= 0,
		doorArea 			= 0,
		uncoveredAreaSum	= 0,
		wallpaperQuantity	= 0;

	function area(height, width) {
		var result = height * width;
		return result;
	};
	

	wallpaperArea 		= area(wallpaperLength, wallpaperWidth); 	// Площадь рулона обоев
	wallsArea 			= area(roomHeight, roomPerimetr);			// Площадь стен
	widnowArea 			= area(windowHeight, windowWidth);			// Площадь окна
	doorArea   			= area(doorHeight, doorWidth);				// Площадь двери
	uncoveredAreaSum 	= widnowArea + doorArea;					// Сумма площадей непокрытых поверхностей
	wallpaperQuantity	= Math.ceil((wallsArea - uncoveredAreaSum) / wallpaperArea);

	console.log("Необходимое количество обоев:", wallpaperQuantity);
	return wallpaperQuantity
};

//Почасовая оплата
function toPay(hours, minutes, uahPerHour){

	var hoursTotal 	= hours + (minutes/60),
		result 		= 0,
		course = {
			"гривна": 1,
			"доллар": 27.75,
			"евро"	: 31.5
		};

	for(item in course) {
		result = (uahPerHour / course[item] * hoursTotal).toFixed(1);
		console.log("Сумма к оплате, " + item + ": " + result);
	};
};
