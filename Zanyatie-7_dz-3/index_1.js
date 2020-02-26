/* 1. Пользователь вводит строку. Найти и вывести самое длинное
слово в этой строке. Вывести количество гласных (латинских) в
этой строке (прописных и строчных) */

const string = String(prompt('Введите строку'));

const myArr = string.split(' ');

let max = myArr[0];
for (let i = 0; i < myArr.length; i++) {
  if (max.length < myArr[i].length) {
    max = myArr[i];
  }
}
console.log(max);

let glasnie = 0;
const strGlasnie = 'aAeEiIoOuU';

for (let i = 0; i < string.length; i++) {
  let char = string.charAt(i);
  if (strGlasnie.includes(char)) {
    glasnie++;
  }
}
console.log(glasnie);