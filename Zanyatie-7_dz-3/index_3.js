/* 3. Создать массив из объектов-людей. Каждому задать случайную
дату рождения от 1 января 1980 до 31 декабря 1995, имя, а также
зарплату (от 0 до 500). Имена выбираются случайно из другого
массива имён. Количество людей вводится с клавиатуры. Вывести
всех людей в консоль, вывести средний возраст людей и имя
человека с самой большой зарплатой в списке. */

const numberOfHumans = +prompt('Введите количество людей');
const names = ['Don', 'Pol', 'Ada'];

const people = [];

for (let i = 0; i < numberOfHumans; i++) {
  const year = Math.round(1980 + Math.random() * (1995 - 1980));
  const month = Math.round(1 + Math.random() * 11);

  let day = 0;

  if (month == 4 || month == 6 || month == 9 || month == 11) {
    day = Math.round(1 + Math.random() * 29);
  }
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    day = Math.round(1 + Math.random() * 30);
  }
  if (month == 2) {
    if (year == 1980 || year == 1984 || year == 1988 || year == 1992) {
      day = Math.round(1 + Math.random() * 28);
    } else {
      day = Math.round(1 + Math.random() * 27);
    }
  }

  const myDate = year + '-' + month + '-' + day;
  const dateOfBirth = new Date(myDate);

  const index = Math.round(Math.random() * (names.length - 1));

  const human = {
    dateOfBirth: dateOfBirth,
    name: names[index],
    money: Math.round(Math.random() * 500)
  }
  people.push(human);
}
console.log(people);

let humanWhithMaxMoney = people[0];
for (let i = 0; i < people.length; i++) {
  if (people[0].money < people[i].money) {
    humanWhithMaxMoney = people[i];
  }
}
console.log(humanWhithMaxMoney.money);
console.log(humanWhithMaxMoney.name);

//Денис Александрович, не смогла побороть расчет среднего возраста людей