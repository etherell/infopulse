console.log('***Рекурсия***')
console.log('***Числа от А до Б***')

 function from_a_to_b(a, b){
        console.log(a)
        if (a < b){
                a++
                from_a_to_b(a, b)
        } else if (a > b){
                a--
                from_a_to_b(a, b)
        } else {
                return a
        };      
  };

from_a_to_b(5, 10)

 console.log('***Сумма цифер числа***')

 let sum = 0;
 let i = 1

 function num_sum(number){
        sum += Math.floor(number / i % 10)

        if(i <= number){
                i *= 10;
                num_sum(number);
        };

        return sum;     
 };

 console.log(num_sum(149));


console.log('***Перебор меню***')

let menu = ["about us", "contacts", "main", "products"];
console.log(menu);
let newMenu = [];

menu.map(function(item, index){
        item = item.split("");
        item.splice(0, 1, item[0].toUpperCase());``  //item[0] = item[0].toUpperCase();
        item = item.join("");
        newMenu.push(item);
        console.log(item);
});

console.log(menu);
console.log(newMenu);