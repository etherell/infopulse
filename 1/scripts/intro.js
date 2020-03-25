//Константа
var HEADING			= "Infopulse Univer";

//Переменные
var subject 	 	= "frontend programming",
	subjectHours 	= 22,
	subjectMonthQty = 2,
	subjectPrice 	= 5000,
	langs 			= ["javaScript", "PHP", "Python"],  //Задаём массив
	subjects 		= {
		"java" 		: 5000,
		"angular js": 6000,
		"c++"		: 4500
	},
	currentSubject	= "c++",
	goodsItem 		= {			//Создаём товар
		title : "phone LG",
		color : "black",
		price : 10000
	}

//Вывод на консоль браузера
console.log(HEADING);
console.log(subject, subjectHours, "hours", subjectMonthQty, "months", subjectPrice, "uah/month");


//Переопределение значения переменной
subjectMonthQty = 3;
console.log(subjectMonthQty, "months");

//Вывод простого массива на консоль
console.log("Programming langs ", langs);
//Вывод значения элемента массива
console.log(langs[0]); // 0 - индекс

//Вывод объекта на консоль
console.log(subjects);

//Вывод значения обьекта
console.log("angular js", subjects["angular js"], "uah");

//Вывод значения обьека при помощи переменной
console.log(currentSubject, subjects[currentSubject], "uah");

//Переопределение зачения эллемента массива или объекта
langs[0]="JS";
console.log("Programming langs ", langs);

subjects["java"] = 5500;
console.log(subjects);

//Обращаемся к свойству массива
console.log("Programming languages quantity:", langs.length);
console.log(goodsItem["title"], goodsItem.color);	//Два варианта вызова свойства объекта