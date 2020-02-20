/* 4. Проверить расстановку скобок в введённой строке */

const string = String(prompt('Введите строку'));

let openBracket = 0;
let closeBracket = 0;

for (let i = 0; i < string.length; i++) {
	let unikod = string.charCodeAt(i);
  if (unikod == 40) {
  	openBracket++;
  } else {
  	if (unikod == 41) {
    	closeBracket++;
    }
  }
}

if (openBracket == closeBracket) {
	alert('Скобки расставлены верно');
} else {
	alert('Проверьте расставление скобок');
}