var menu = {
	"index" : {
		"ru" 	: "Главная",
		"en"	: "Home"
	},
	
	"about" : {
		"ru" 	: "О нас",
		"en"	: "About us"
	},

	"contacts" : {
		"ru" 	: "Контакты",
		"en"	: "Contacts"
	}
};

var currentLang			= "en",
	currentFileName 	= "index";

console.log(menu);
console.log('Текущий язык сайта:', currentLang);
console.log(menu[currentFileName][currentLang]);