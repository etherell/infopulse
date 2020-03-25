// Работа над строкой
var subject = 'frontend';
console.log(subject, subject.length, subject[0]);

// Транслитерация
var data = "Гурович Алексндра",
	symbols = {
		"г" : "g",
		"у" : "u",
		"р" : "r",
		"о" : "o",
		"в" : "v",
		"и"	: "i",
		"ч" : "ch"
	},
	translitData = "";

data = data.toLowerCase()

	for (var i = 0; i < data.length; i++){
		translitData += symbols[data[i]] ? symbols[data[i]] : data[i];
	}

		/* if(symbols[data[i]]) {
			translitData += symbols[data[i]] {
			} else { 
			translitData += data[i]	
		  } 
		}*/
	
	console.log(translitData);


//Работа с юникодом
var firstLetter 	= "A",
	lastLetter 		= "Z",
	firstLetterNum  = firstLetter.charCodeAt(0),
	lastLetterNum	= lastLetter.charCodeAt(0),
	menu 			= "";

console.log (firstLetter, '-' , firstLetterNum, lastLetter, '-' , lastLetterNum)

	for (var i = firstLetterNum; i <= lastLetterNum; i++) {
		menu += String.fromCharCode(i) + " ";
	}

console.log(menu);