/* 1. Посчитать количество гласных, согласных букв и других символов в строке
(строки, выбор) */

let string = String(prompt('Введите текст'));
string = string.toLowerCase();

let glasnie = 0;
let soglasnie = 0;
let simvoli = 0;

for (let i = 0; i < string.length; i++) {
	let char = string.charAt(i);
  if (char == 'а' || char == 'о' || char == 'у' || char == 'и' || char == 'ы' || char == 'э' || char == 'е' || char == 'я' || char == 'ю' || char == 'ё') {
  		glasnie++;
  } else {
  	if (char == 'б' || char == 'в' || char == 'г' || char == 'д' || char == 'ж' || char == 'з' || char == 'й' || char == 'к' || char == 'л' || char == 'м' || char == 'н' || char == 'п' || char == 'р' || char == 'с' || char == 'т' || char == 'ф' || char == 'х' || char == 'ц' || char == 'ч' || char == 'ш' || char == 'щ' || char == 'ъ' || char == 'ь') {
    	soglasnie++;
    } else {
    	char++;
    }
  }
}
alert('Гласных букв = ' + glasnie + ', ' + 'согласных букв = ' + soglasnie + ', ' + 'символов = ' + simvoli);