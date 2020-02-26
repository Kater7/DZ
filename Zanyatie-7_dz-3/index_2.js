/* 2. Вывести в консоль или в окно количество минут, которое осталось
до конца дня, в котором запущен скрипт */

const myDate = new Date();
console.log(myDate);

const restOfMinutes = 24 * 60 - (myDate.getHours() * 60 + myDate.getMinutes());
console.log(restOfMinutes);

