/* Создать функцию
6.1.1. Вычисление суммы всех аргументов */

const getSum = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(getSum(1, 2, 3, 4));
