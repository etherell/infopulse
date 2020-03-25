
//Добавление элемента в массив
var colors = ["red", "green", "blue"];
console.log(colors);

colors[3] = "yellow";
console.log(colors);

colors[colors.length] = "pink";
console.log(colors);

// colors[10] = "black";
// console.log(colors);

//unshift
console.log("Новая длина массива:", colors.unshift("white")); // Возвращает новую длинну массива
console.log(colors);

//pop
console.log("Удаленная переменная:", colors.pop()); // Возвращает удаленну переменную
console.log(colors);

//splice

//Добавление
colors.splice(2, 0, "black"); // Добавление на позицию 2 элемента "black";
console.log('Добавление black на 2 позицию', colors);

//Удаление
colors.splice(3, 1); // Удаляем с позиции 3 один элемент;
console.log('Удаление элемента с 3 позиции', colors);

//Замещение
colors.splice(3, 2, "violet", "navy"); // Замещаем 2 элемента на 3 и 4 позиции;
console.log('Замещене 3 и 4 элемента', colors);

//join
var colorsList = colors.join(' / '); // Вывод элеметом массива с разделителем
console.log(colorsList)

var sDate = "12.03.2020",
	aDate = sDate.split('.'),
	month = {
		"02" : "Февраль",
		"03" : "Март"
	}

console.log(sDate, aDate);
console.log(aDate.reverse())
aDate[1] = month[aDate[1]];
console.log(aDate.join(" "));
