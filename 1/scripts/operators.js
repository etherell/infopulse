var num1 	= 5,
	num2 	= 7,
	result 	= 0,
	userName= "Kate",
	message = "Hello";

console.log("num1:", num1);
console.log("num2:", num2);
console.log("result:", result);

console.log("**** Сложение ****");
result = num1 + num2;
console.log("result:", result);

console.log("**** Сокращенная арифметика ****");
result += 2 										// resut = result + 2
console.log("result:", result);

console.log("**** Икремент ****");
result ++											// result += 1
console.log("result:", result);

num1 = 1;
num2 = 1;
console.log("num1:", num1);
console.log("num2:", num2);

console.log("**** num1++ ****");
result = num1++;
console.log("num1:", num1);
console.log("result:", result);						// result = 1 , num1 = 2

console.log("**** ++num2 ****");
result = ++num2;
console.log("num1:", num2);
console.log("result:", result); 					// result = 2 , num2 = 2

console.log("**** Сравение ****");
console.log("num1 == num2", num1 == num2);
console.log("num1 != num2", num1 != num2);

num2 = "2";
console.log("num1:", num1, typeof num1); 			// Получение типа данных переменной
console.log("num2:", num2, typeof num2);
console.log("num1 == num2", num1 == num2);   		// Сравнение по значению
console.log("num1 === num2", num1 === num2); 		// Сравнение по значению и по типу данных

console.log("**** Отрицание ****");
console.log("!num2", !num2);

console.log("**** Конкотенация строк ****");
message += ", " + userName + "!";
console.log(message);

result = 0;
num1 = "5";
num2 = "7";
console.log("num1:", num1, typeof num1);
console.log("num2:", num2, typeof num2);
console.log("result", result, typeof result);
result = (+num1) + (+num2);							// + - приводит строку к числу
console.log("result:", result);
console.log("result", result, typeof result);
