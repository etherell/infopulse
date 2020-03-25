// Объявление объекта с информацией о курсах
course = {
	"Java": {
		cost 		: 4000,
		duration 	: 2,
		classes		: 10,
		start 		: '15.03.2020',
		days  		: 'Вторникам и Четвергам',
		time 		: '18:30 до 21:00',
		clasroom	: 815,
		floor		: 8
	},
	
	"JavaScript": {
		cost 		: 5000,
		duration 	: 2,
		classes		: 10,
		start    	: '01.04.2020',
		days		: 'Cубботу',
		time		: '10:00 до 14:30',
		clasroom	: 520,
		floor		: 5
	},

	"Python": {
		cost 		: 5000,
		duration 	: 3,
		classes		: 15,
		start   	: '22.03.2020',
		days		: 'Cубботам',
		time		: '10:00 до 14:30',
		clasroom	: 710,
		floor		: 7
	}
}

//Объявление переменных
var userInput 		= "Python",
	costPerMonth 	= course[userInput].cost,
	courseDuration  = course[userInput].duration,
	classes 		= course[userInput].classes,
	start 			= course[userInput].start,
	days 			= course[userInput].days,
	time 			= course[userInput].time,
	clasroom		= course[userInput].clasroom,
	floor			= course[userInput].floor,
	totalCost 		= costPerMonth * courseDuration,
	secondCourse	= true,
	secondDiscount	= 10,
	withFriend		= true,
	friendDiscount	= 5,
	discount 		= 0;


// Сообщения для клиента
var messages = {
	courseNameMessage	:   "Поздравляем! Вы выбрали курс:",
	startMessage		:   "Ваш курс начинается:",
	courseCostMessage	: 	"Стоимость Вашего курса в месяц составляет:",
	durationMessage		: 	"Длительность Вашего курса:",
	totalCostMessage	: 	"Итоговая стоимость всего курса:",
	classesMessage		:   "Курс состоит из",
	dayMessage			: 	"Курс будет проходить по",
	timeMessage			: 	"во временном промежутке c",
	auditoryMessage		:  	"Ваша аудитория -",
	floorMessage		: 	"находится на",
	secondAndFriend		:  	"Вы проходите второй курс и привели друга, Ваша скидка:",
	secondCourseMessage : 	"Вы проходите второй курс, Ваша скидка:",
	withFriendMessage	: 	"Вы привели друга, Ваша скидка:",
	noDiscount			: 	"К сожалению, у Вас нет скидок"
};

//Сообщеня для пользователя
console.log(messages.courseNameMessage, userInput);
console.log(messages.courseCostMessage, costPerMonth, "грн");

//Расчет скидки
if (secondCourse && withFriend) {
		discount = ((secondDiscount + friendDiscount) / 100) * totalCost;
		console.log(messages.secondAndFriend, discount, "грн");
		totalCost -= discount;
} else if (secondCourse) {
		discount = (secondDiscount/100) * totalCost;
		console.log(messages.secondCourseMessage, discount, "грн");
		totalCost -= discount;
} else if (withFriend) {
		discount = (friendDiscount/100) * totalCost;
		console.log(messages.withFriendMessage, discount, "грн");
		totalCost -= discount;
} else {
		console.log(noDiscount);
};


//Сообщеня для пользователя - часть 2
console.log(messages.totalCostMessage, totalCost, "грн");
console.log(messages.durationMessage, courseDuration, "месяца");
console.log(messages.classesMessage, classes, "занятий");
console.log(messages.dayMessage, days, messages.timeMessage, time);
console.log(messages.auditoryMessage, clasroom, messages.floorMessage, floor, "этаже");


