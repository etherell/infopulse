// Вывод цифр от 0 до 5
var list = "";

	for(var i = 0; i < 6; i++) {
		// console.log(i);
		list += i + " ";
	}

console.log(list);
//Переменные
var nums 		= [2, -1, -6, 7, 4, 5, 7, -3, 9, 7],
	numsLength 	= nums.length,
	result 		= "",
	qty			= 0;


// Вывод цифр от 5 до 0
var list = "";
	for(var i = 5; i >= 0; i--) {
		list += i + " ";
	}

console.log(list);


// Вывод значений массива через пробел


	for (var i = 0; i < numsLength; i++) {
		result +=  nums[i] + " ";
	}

console.log("Вывод значений массива через пробел:", result);

// Вывод отрицательных значений массива
result = "";

for (i = 0; i < numsLength; i++) {
		if (nums[i] < 0) {
		result += nums[i] + " ";
		}
	}

console.log("Отрицательные зачения:", result);

// Вывод четных значений
result = "";

for (i = 0; i < numsLength; i++) {
		if (!(nums[i] % 2)) { 						//nums[i] % 2 === 0;
		result += nums[i] + " ";
		}
	}

console.log("Четные значения:", result);

// Вывод нечетных положительных значений
result = "";

for (i = 0; i < numsLength; i++) {
		if ((nums[i] % 2) && nums[i] > 0) { 		//nums[i] % 2 != 0;
		result += nums[i] + " ";
		}
	}

console.log("Нечетные положительные значения:", result);

// Подчет количества 7

for (i = 0; i < numsLength; i++) {
	if (nums[i] === 7) {
		qty++
	}
}

console.log("Количество цифр 7 в массиве:", qty);

// Вывод цикла через одно
result = "";

for (i = 0; i < numsLength; i+=2) {
	result += nums[i] + " ";
}

console.log("Значения массива через одно:", result);

// Вывод максимального значения
result = "";

for (var j = 1, max = nums[0]; j < numsLength; j++) {
	if (nums[j] > max) {
			max = nums[j]
	}
}

console.log("Максимальное значение мссива:", max);

// Цикл for in

var holidays = {
	"New Year" : "1.01",
	"Christmas": "7.01",
	"8 March"  : "8.03"
};

for (var holidayTitle in holidays){
		console.log(holidayTitle, holidays[holidayTitle])
}

//Работа с многомерным массивм

var menu = {
	"index" : {
		"ru" 	: "Главная",
		"en"	: "Home"
	},
	
	"about" : {
		"ru" 	: "О нас",
		"en"	: "About us"
	},

	"contacts" : {
		"ru" 	: "Контакты",
		"en"	: "Contacts"
	}
};

//Вывод значений по языку
var currentLang = 'en';


for (var fileName in menu){
		console.log(fileName, menu[fileName][currentLang]);
}


// Сумма всх эллементов массива

var sum = 0;

for (i = 0; i < numsLength; i++) {
	sum += nums[i];
}

console.log('Сумма всех элементов массива', sum)


//Создание ассоциативного массива
var colors = {
	"Red" 		: "Красный",
	"Orange"	: "Оранжевый",
	"Yellow"  	: "Желтый",
	"Green"  	: "Зеленый",
	"Blue"  	: "Голубой",
	"Indigo" 	: "Синий",
	"Violet"  	: "Фиолетовый"
} 

for (color in colors) {
	console.log(color, '-', colors[color]);
}