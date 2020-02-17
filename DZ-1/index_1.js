const A = prompt('Введите первое число:');
const B = prompt('Введите второе число:');
const C = prompt('Введите третье число:');
const D = prompt('Введите четвертое число:');

const a = Number(A);
const b = Number(B);
const c = Number(C);
const d = Number(D);

let f = 0;
let h = 0;

if (a > b) {
	f = a;
} else {
		f = b;
}

if (c > d) {
  h = c;
} else {
    h = d;
}

if (f > h) {
	alert('Наибольшее число из введенных = ' + f);
} else {
		alert('Наибольшее число из введенных = ' + h);
}

const sredneeGarmonicheskoe = (4 / (1/a + 1/b + 1/c + 1/d));
alert('Среднее гармоническое чисел = ' + j);