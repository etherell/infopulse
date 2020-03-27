(function () {


// Создание функции калькулятора обоев
wallpaperCalculator = function() {
	

	// Переменные передаваемые из полей или с сайта
	let wallpaperLength		= wallpaper_length.value,
		wallpaperWidth		= wallpaper_width.value,
		roomHeight 			= parseInt(room_height.value),
		roomPerimetr		= parseInt(room_perimetr.value),
		windowHeight		= parseInt(window_height.value),
		windowWidth			= parseInt(window_width.value),
		doorHeight			= parseInt(door_height.value),
		doorWidth			= parseInt(door_width.value),
		result 				= document.querySelector(".result");


	// Рассчетные Переменные
	let wallpaperAra 		= 0,
		wallsArea			= 0,
		widnowArea			= 0,
		doorArea 			= 0,
		uncoveredAreaSum	= 0,
		wallpaperQuantity	= 0;

	// Функция для расчетов (не обязательная, сделана для практики)
	function area(height, width) {
		var multiplication = height * width;
		return multiplication;
	};
	
	//Рассчеты ключевых значений
	wallpaperArea 		= area(wallpaperLength, wallpaperWidth); 	// Площадь рулона обоев
	wallsArea 			= area(roomHeight, roomPerimetr);			// Площадь стен
	widnowArea 			= area(windowHeight, windowWidth);			// Площадь окна
	doorArea   			= area(doorHeight, doorWidth);				// Площадь двери
	uncoveredAreaSum 	= widnowArea + doorArea;					// Сумма площадей непокрытых поверхностей
	wallpaperQuantity	= Math.ceil((wallsArea - uncoveredAreaSum) / wallpaperArea);

	// Условия вывода результата
	if (wallpaperQuantity > 0){
    	return result.innerHTML	= "Необходимое количество рулонов обоев: " + wallpaperQuantity;
    } else {
    	return result.innerHTML	= "Вы не заполнили форму или ввели неверное значение";
    };
};


let form = document.querySelector('.form');

count_button.onclick = () => {
	form.classList.toggle('hide-form');
}

// Запуск функции по нажатию
count.onclick = wallpaperCalculator;
     

}());

(function () {

link.onclick = () => {
	show_link.innerHTML = `<em>Подсказка к ссылке.</em> **** <b>title</b>: ${link.title} **** <b>target:</b> ${link.target} <br><b>href:</b> ${link.href} **** 
	<b>tagName:</b> ${link.tagName} **** <b>id:</b> ${link.id}`
}

input.onclick = () => {
	show_input.innerHTML = `<em>Подсказка к полю ввода.<br></em> <b>placeholder</b>: ${input.placeholder} **** <b>tagName:</b> ${input.tagName} **** <b>id:</b> ${input.id}`
}

p.onclick = () => {
	show_p.innerHTML = `<b>Но это не точно</b><br><em>Подсказка к параграфу.<br></em><b>tagName:</b> ${p.tagName} **** <b>id:</b> ${p.id}`
}

cats.onclick = () => {
	show_cats.innerHTML = `<em>Подсказка к картинке.</em><br><b>alt</b>: ${cats.alt}<br><b>src:</b> ${cats.src} <br>
	<b>tagName:</b> ${cats.tagName} **** <b>id:</b> ${cats.id}`
}

}());