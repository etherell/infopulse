(function() {
  const number1       = document.querySelector(".num1");
  const number2       = document.querySelector(".num2");
  const operators     = document.querySelector(".operators");
  const result        = document.querySelector(".result");
  const calcBtn       = document.querySelector(".calc_btn");
  const errorMessage  = document.querySelector(".error_message");


  function calculator() {
    let   num1 = parseInt(number1.value),
          num2 = parseInt(number2.value);

    // Убираем ошибку
    number2.classList.remove('error');
    errorMessage.classList.remove('shown');

    if (operators.value == '+') {
        result.value = num1 + num2;
    } else if (operators.value == '-'){
        result.value = num1 - num2;
    } else if (operators.value == '*'){
        result.value = num1 * num2;
    } else if (operators.value == '/'){
          if(num2){
            result.value = num1 / num2;
          } else {
            // Очищаем поле и добавляем ошибку
            result.value = ``;
            // number2.style.boxShadow = "0 0 3px #ff0000";
            number2.classList.add('error');
            errorMessage.classList.add('shown');
          }
    };
};
  
  calcBtn.onclick = calculator;

})();