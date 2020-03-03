/*3. Написать скрипт, который выведет домен 1-го уровня той страницы,
на которой запущен. */

const A = prompt('Введите строку');

const firstLevelDomain = /(\.[a-z]{2,4})\//;
console.log(A.match(firstLevelDomain));

//https://github.com/Kater7
//https://developer.mozilla.org/ru
//https://rezka.ag/films