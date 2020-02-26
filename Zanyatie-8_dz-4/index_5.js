/* Создать функцию
6.1.5. Проверка простоты введенного числа */

const checkIsSimple = function(a) {
  let divider = 0;
  for (let i = 2; i < a / 2; i++) {
    if (a % i == 0) {
      divider++;
    }
  }
  if (divider == 0) {
    console.log('Простое');
  } else {
    console.log('Составное');
  }
}
checkIsSimple(5);
checkIsSimple(10);
checkIsSimple(273);
checkIsSimple(300);