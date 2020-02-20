/* 5. Написать калькулятор: число + знак + число = результат */

const firstNum = Number(prompt('Введите первое число')); 
const znak = String(prompt('Введите знак'));
const secondNum = Number(prompt('Введите второе число')); 

let result = 0;
let unikod = znak.charCodeAt(0);

switch (unikod) {
		case 42:
    		result = firstNum * secondNum;
        break;
    case 43:
    		result = firstNum + secondNum;
        break;
    case 45:
    		result = firstNum - secondNum;
        break;
    case 47:
    		result = firstNum / secondNum;
        break;
    default:
    		alert('Введите правильный знак');
}
alert(result);