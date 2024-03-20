

var num1 = +prompt('введите первое число: ')
var num2 = +prompt('введите второе число: ')
var num3 = +prompt('введите третье число: ')

if(isNaN(num1) && isNaN(num2) && isNaN(num3)){alert('вы не указали ни одного числа!')}
else if(isNaN(num2) && isNaN(num3)){alert('вы в 2 и 3 числе указали не число!')}
else if(isNaN(num1) && isNaN(num3)){alert('вы в 1 и 3 числе указали не число!')}
else if(isNaN(num1) && isNaN(num2)){alert('вы в 1 и 2 числе указали не число!')}
else if(isNaN(num1)){alert('вы в 1 числе указали не число!')}
else if(isNaN(num2)){alert('вы в 2 числе указали не число!')}
else if(isNaN(num3)){alert('вы в 3 числе указали не число!')}
else if((num1 >= num2 && num2 >= num3) || (num1 <= num2 && num2 <= num3)){alert('среднее число это ' + num2)}
else if((num2 >= num1 && num1 >= num3) || (num2 <= num1 && num1 <= num3)){alert('среднее число это ' + num1)}
else if((num2 >= num3 && num3 >= num1) || (num2 <= num3 && num3 <= num1)){alert('среднее число это ' + num3)}