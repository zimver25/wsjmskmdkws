

var num = +prompt('укажите время: ')

if(isNaN(num) || (0 > num || num > 23)){alert('вы указали не существующее время')}
else if(0 >= num <= 12){alert('its ' + num + ' am')}
else if(13 >= num <= 23){alert('its ' + (num - 12) + ' pm')}