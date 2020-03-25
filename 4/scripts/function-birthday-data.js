console.log("Функции часть 2");

(function(){
	// База данных с днями рождения
	var BIRTHDAY_DATA = {
		"3" : {
			"13" : {
				"Катя" : 1989,
				"Вася" : 2000 
			}
		}
		
	},

	//Собираем информацию по сегодняшней дате
	today = new Date(),   
	year  = today.getFullYear(),
	month = today.getMonth() + 1,
	date  = today.getDate();

	function getBirthdayData(){
		var list 			= BIRTHDAY_DATA[month][date], // Заходим в ячейку с сегодняшней датой
			listForOutput 	= "", 	// Создаём переменую для вывода
			age 			= 0;	// Создаём переменну для сохранения количества лет


			for(name in list) {  // Перебираем массив по именам в той ячейке куда зашли
				age = year - list[name]; // Отнимаем текущий год от года рождения человека
				listForOutput += name + " исполняется " + age + "\n"; // Сохраняем строку для тех у кого День рождения
			}

			return listForOutput;
			console.log(listForOutput)
	}
	
	console.log(getBirthdayData());
})();