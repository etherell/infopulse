let frontendLangs 	= ["ntml", "css", "js"],
	backendLangs 	= ["PHP", "Python", "Java"],
	langs 			= [...frontendLangs, ...backendLangs]; //spread

console.log(langs);

//rest
/* function greetings(...greetingsList){ // Передача массива в качестве параметра
	console.log(greetingsList);
} */
const greetings = (...greetingsList) => { //arrow function
	console.log(greetingsList);
}

greetings('hi', 'hello', 'good morning');

// Деструктуризация
[name, phone, email] = ["Катя", "+380995679054", "gmail@gmail.com"] 
console.log(name, phone, email)

// Шалонные строки
console.log(`User info: ${name}, ${phone}, ${email}`)

// Параметры по умолчанию
/* function showGreeting(type="Good morning", userName="admin"){
	console.log(`${type}, ${userName}`)
} */

const showGreeting = (type="Good morning", userName="admin") => {
	console.log(`${type}, ${userName}`);
}

showGreeting("hi", name);
showGreeting("hi");
showGreeting();

// Цикл for of

for(let lang of langs){
	console.log(lang);
}


//ES 5
// Цикл for in
for(var i in langs){
	console.log(langs[i]);
}

// Перебор массива в forEach
langs.forEach(function(lang, index){
	console.log(lang, index);
});

// Фильтрация массива
let nums = [-1, 2, 4, 8, 7],
	filterNums = nums.filter(function(num){
		return num < 5;
	});

console.log(nums, filterNums);


// Map
let mapFilter = nums.map(function(num) {
	return num * 2;
});

console.log(nums, mapFilter);