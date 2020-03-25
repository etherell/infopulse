(function(){
	const btn1 = document.getElementById("btn1");
	console.log("Кнопка", btn1, btn1.tagName, btn1.innerHTML);

	btn1.onclick = function() {
		btn1.innerHTML = "your message";
		alert("my button");
	}



	const btn2 	= document.querySelector("#btn2");
	const text1 = document.querySelector(".text1");
	const dog 	= document.querySelector(".dog");


	function showText(){
		console.log("my text");
		text1.innerHTML = "my <strong>text</strong>";
	}

	console.log("Кнопка", btn2)
	btn2.onclick 	= showText; //Назначение функции
	dog.onclick		= () => {
		dog.src = "images/advantage-2.jpg" // Подмена картинки
	}

	/*
	btn1.onclick = () => {
	b
	}
	*/
	const query 			= document.querySelector(".query");
	const btnSearch 		= document.querySelector(".btn-search");
	const searchQuery		= document.querySelector(".search-query");
	const searchResults 	= document.querySelector(".search-results");
	
	btnSearch.onclick = () => {
		
		event.preventDefault(); //
		searchResults.style.display = "block"; //search-results.style.fontSize
		searchQuery.innerText = `Результат: ${query.value}`;
	}


}())