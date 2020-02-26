/* Создать функцию
6.1.2. Получение случайного числа в заданном диапазоне */

const randomNumber = (a, b) => a + Math.random() * (b - a);

console.log(randomNumber(1, 10));
console.log(randomNumber(10, 1));