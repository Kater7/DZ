const A = prompt('Первое число:');
const B = prompt('Второе число:');

const a = Number(A);
const b = Number(B);

if ((a % b) == 0) {
	alert('Число ' + a + ' делится без остатка на число ' + b);
} else {
	alert('Число ' + a + ' не делится без остатка на число ' + b);
}

//alert((a % b == 0) ? ('Число ' + a + ' делится без остатка на число ' + b) : ('число ' + a + ' не делится без остатка на число ' + b));