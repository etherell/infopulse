var nums = [
		//0 1 2
		[1, 2, 3], 	// 0
		[4, 5, 6],	// 1
		[7, 8, 9]	// 2
	];

console.log(nums);
console.log(nums[0]);
console.log(nums[0][2]);

var contacts = [
	{ // 0
		name	: "Карпов",
		phone	: "+380977779988"
	},

	{ // 1
		name	: "Петров",
		phone	: "+380633332303"
	},

	{ // 2
		name	: "Квятковская",
		phone	: "+380971235710"
	}

];

//Вывод многомрного массива
console.log(contacts);
console.log(contacts[1]);
console.log(contacts[1].name); //contacts[1]["name"]


//Многомерный ассоциативный массив, ассоциативный массив с объектами, объект с объектами в составе
var goods = {
	"QWE123" : {
		title: "платье",
		color: "красный",
		price: 1200
	},

	"ASD456" : {
		title: "брюки",
		color: "синий",
		price: 800
	},

	"ZXC897" : {
		title: "шапка",
		color: "белый",
		price: 600
	}
}

//Вывод объекта и его вложенных объектов
console.log(goods);
console.log(goods["ASD456"]);
console.log(goods["ASD456"].title, goods["ASD456"].price, "грн");


//Пользователь ищет по названию товара
var id = "ZXC897";
console.log(goods[id].title, goods[id].color, goods[id].price, "грн");

//Практическое задание
var students = {
	"R2D2": {
		name: "Валерчик",
		mark: 3
	},

	"T1000": {
		name: "Cерёжка",
		mark: 5
	},

	"god2007": {
		name: "Васёк",
		mark: 1
	}
}

console.log(students)
console.log(students["R2D2"])
console.log('Имя студента-1', students["R2D2"].name, 'Оценка', students["R2D2"].mark, 'Имя студента-2', students["T1000"].name, 'Оценка', students["T1000"].mark)