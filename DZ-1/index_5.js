const A = prompt('Введите первое число:');
const B = prompt('Введите второе число:');
const C = prompt('Введите третье число:');

const a = Number(A);
const b = Number(B);
const c = Number(C);

const poluPer = ((a + b + c) / 2);
const ploshadTreugGerona = ((poluPer * (poluPer-a) * (poluPer-b) * (poluPer-c)) ** (1/2));

alert('Площадь треугольника (по формуле Герона) со сторонами ' + a + ', ' + b + ' и ' + c + ' = ' + ploshadTreugGerona);
