function factorial(N){
	return N <= 1 ? 1 : N * factorial(N - 1);
}

console.log(factorial(3));

function printRange(iNumber){
   if (iNumber){
    console.log(iNumber);
    printRange(--iNumber);  
    }
   }

  printRange(4);

 console.log('***ДЗ***')
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

from_a_to_b(10, 10)

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