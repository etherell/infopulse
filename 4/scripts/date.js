var today = new Date(),
	month = today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1,
	date  = today.getDate() < 10 ? "0" + (today.getDate()) : today.getDate();

console.log(today)
console.log(today.getDate(), month, today.getFullYear() );

var holidays = {
	"03" : {
		"07" : ["подготовка к 8 Марта", "обретение мощей мучеников"],
		"08" : ["8 марта"]
	}
};

if (holidays[month][date]) {
	// console.log("Сегодня", holidays[month][date]);
	for (var i = 0; i < holidays[month][date].length; i++) {
			console.log(holidays[month][date][i]);
	} 
} else {
	console.log("Сегодня нифига нет");
};