(function () {



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





count.addEventListener('click', function(event){



let wallpaperLength		= wallpaper_length.value,
	wallpaperWidth		= wallpaper_width.value,
	roomHeight 			= parseInt(room_height.value),
	roomPerimetr		= parseInt(room_perimetr.value),
	windowHeight		= parseInt(window_height.value),
	windowWidth			= parseInt(window_width.value),
	doorHeight			= parseInt(door_height.value),
	doorWidth			= parseInt(door_width.value),
	result 				= document.querySelector(".result");

	result.innerHTML = "";

    calc				= wallpaperCalculator(wallpaperLength, wallpaperWidth, roomHeight, roomPerimetr, windowHeight, windowWidth, doorHeight, doorWidth); 
    
    if (calc > 0){
    	result.innerHTML	= "Необходимое количество рулонов обоев: " + calc;
    } else {
    	result.innerHTML	= "Вы не заполнили таблицу или ввели неверное значение";
    }

});

}());