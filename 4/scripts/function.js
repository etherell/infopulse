// function declaration4
console.log("Функции часть 1");
console.log("#0");
function calcSum (num1, num2) { // (num1, num2) - сигнатура фунции
	console.log("#3");
	var sum = num1 + num2;
	console.log("sum:", sum);
}

console.log("#1'");
var sum = 0;
console.log("#2");
console.log(calcSum(5, 7));
console.log('#4');
console.log("sum:", sum);

//  Hетипичные случаи

var x = 0,
	y = 0;
z = 0; // так нелья

function test() {
	y = 3;
	var y = 1;
	x = 1;
	z = 1;
	k = 0;
}

test();
console.log(x);
console.log(y);
console.log(z);
console.log(k);

// Функции

// Создаём функцию которая принимает название и вес и считает каллории

(function(){


	function getCals(title, weight) {
		var foodData = {
			"Брюква" 	: 37,
			"Антилопа"	: 114,
			"Зефир"		: 192,
			"Омлет"		: 181,
			"Кальмар"	: 77,
			"Колбаса"	: 257,
			"Молоко"	: 53
		},
		cals = 0;

		if (foodData[title]) { // Проверяем верно ли всё ввел пользователь
			// Если верно считаем количество каллорий при данном количестве еды
			cals = Math.round(foodData[title] * weight / 100) 
		} else {
			// Еслии нет - выводим сообщение о том что товар не найден
			console.log("Продукт с названием", title, "в нашей базе данных отсутствует"); 
		}
		
		return cals; // Возвращаем количество посчитанных каллорий
	}

	var food 		= "Молоко";
		foodWeight	= 150;

	var cals = getCals(food, foodWeight);
	console.log(cals, "ккал");


	// Считаем полное кол-во каллорий
	function getDinnerCals(dinnerData) {
		var dinnerCals = 0;
			for(var title in dinnerData) {
				dinnerCals += getCals(title, dinnerData[title]);
			}
			return dinnerCals;
	};

	var myDinner = {
			"Брюква" 	: 200,
			"Антилопа"	: 150,
			"Зефир"		: 200
	};

	var totalCals = getDinnerCals(myDinner);
	console.log("Обед", totalCals, "ккал");
})();

//Площадь треугольника


function triangleArea(base, height) {
	area = (0.5 * base) * height;
	return area
};
	

console.log(`Площадь треугольника ${triangleArea(25.6, 15)} см`);