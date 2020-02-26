/* Создать функцию
6.1.4. Генерацию случайного цвета в формате RGB() */

const getColor = function() {
  let red = Math.round(0 + Math.random() * (255 - 0));
  let green = Math.round(0 + Math.random() * (255 - 0));
  let blue = Math.round(0 + Math.random() * (255 - 0));
  return 'RGB(' + red + ',' + green + ',' + blue + ')';
}
console.log(getColor());