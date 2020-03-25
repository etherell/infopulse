let array 	= [4, 10, -5, 7, 8, -3, 5, 11, -9, 2, 8, -1, 4, -6, 12, 1],
	length 	= array.length,
	result  = "";


// Вывод положительных элементов
for (let i = 0; i < length; i++) {
	if (array[i] >= 0) {
		result += array[i] + " ";
	}
}
console.log("Вывод положительных элементов")
console.log(result);

// Вывод отрицательных элементов через один
result = "";

for (i = 0; i < length; i += 2) {
	if(array[i] < 0) {
		result += array[i] + " ";
	}
}
console.log("Вывод отрицательных элементов через один")
console.log(result);

// Числа кратные 3
result = "";

for (i = 0; i < length; i ++) {
	if(!(array[i] % 3)) {
		result += array[i] + " ";
	}
}
console.log("Числа кратные 3");
console.log(result);

// Сумма каждого 4 элемента
result = 0;

for (i = 0; i < length; i += 4) {
		result += array[i];
}
console.log("Сумма каждого 4 элемента");
console.log(result);

// Среднее арифметическое
result = 0;

for (i = 0; i < length; i++) {
		result += array[i];
}
result /= length

console.log("Среднее арифметическое (округленное)");
console.log(Math.round(result));

// Вывод минимального элемета
result = 0;


for (var i = 1, min = array[0]; i < length; i++) {
		if(min > array[i]) {
			min = array[i]
		}
}

console.log("Минимальный элемент");
console.log(min);

// Попарная перестановка
result 	= "";
let cup = 0;

for (i = 0; i < length; i += 2) {
		cup = array[i];
		array[i] = array[i+1];
		array[i+1] = cup;
}

for (i = 0; i < length; i++) {
	result += array[i] + " "
}

console.log("Попарная перестановка");
console.log(result);


// Транслитерация
var data = "Гурович Алексндра",
	symbols = {
		"г" : "g",
		"у" : "u",
		"р" : "r",
		"о" : "o",
		"в" : "v",
		"и"	: "i",
		"ч" : "ch",
		"а"	: "a",
		"л"	: "l",
		"е"	: "e",
		"к"	: "k",
		"с"	: "s",
		"н"	: "n",
		"д"	: "d"
	},
	translitData = "";

data = data.toLowerCase()

	for (var i = 0; i < data.length; i++){
		translitData += symbols[data[i]] ? symbols[data[i]] : " ";
	}


// Первые буквы заглавными

// translitData = translitData.split('')

translitData.charAt(0) = translitData.charAt(0).toUpperCase();

for (i = 0; i < translitData.length; i++) {
	if (translitData[i] == " ") {
		translitData[i+1] = translitData.charAt(i+1).toUpperCase()
	}
}

// translitData = translitData.join('')
console.log("Транслитерация")
console.log(translitData);

// Ассоциативный массив
podVodku = {
	"seledka"		: 50,
	"cherniy-hleb"	: 15,
	"salo"			: 100,
	"ogurci"		: 25,
	"shashlik"		: 300,	
	"holodec"		: 150
};

console.log ("Вывод ассоциативного массива")
for (zakuska in podVodku) {
	console.log(zakuska, '-', podVodku[zakuska])
}

// Вывод самого дорогого товара
max = podVodku.seledka;

for (zakuska in podVodku) {
	if (max < podVodku[zakuska]) {
		max = podVodku[zakuska]
	}
}

console.log("Вывод самого дорогого товара")
console.log("Самая дорогая закуска -", max)