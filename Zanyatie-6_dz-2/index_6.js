/* 8. Вывести строку, которая состоит из первых букв каждого слова во введенной
пользователем строке. */

let string = String(prompt('Введите строку'));
string = string.trimLeft();

let newString = '';

for (let i = 0; i < string.length; i++) {
  let unikod = string.charCodeAt(i);
  if (unikod == 32) {  	
    newString = newString + string.charAt(i+1);
  }
}
alert(string.charAt(0) + newString); 