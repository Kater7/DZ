/* 1. Написать функцию, которая принимает массив объектов и название
ключа, по которому нужно его отсортировать. Вернёт новый массив с
отсортированными объектами. Вывести вместе старый и новый
массивы. */

//использую массив circle для проверки
/* const circle = [];
for (let i = 0; i < 5; i++) {
  circle.push({
    x: (Math.round(0 + Math.random() * 1000)),
    y: (Math.round(0 + Math.random() * 1000)),
    r: (Math.round(0 + Math.random() * 1000))
  });
} */

const getSortedArray = function(myArray, myKey) {
  const oldArray = [...myArray];

  const mySort = function(a, b) {

    let aKey = 0;
    let bKey = 0;

    for (let key in a) {
      if (key == myKey) {
        aKey = a[key];
      }
    }

    for (let key in b) {
      if (key == myKey) {
        bKey = b[key];
      }
    }

    if (aKey < bKey) {
      return -1;
    }
    if (aKey > bKey) {
      return 1;
    }
    return 0;
  }

  const newArray = myArray.sort(mySort);
  console.log(oldArray);
  console.log(newArray);
};

getSortedArray(circle, 'x');

/* Денис Александрович, я так понимаю, эту задачу необходимо решать с помощью деструктурирующего присвоения и деструктуризации объекта в функции, но у меня в результате не получается вытащить (вывести) значение, которое хранится в ключе myKey (ключ, который, в соответствии с заданием, принимает функция) */

/* const getSortedArray = function(myArray, myKey) {
  const oldArray = [...myArray];

  let [myObject] = myArray;
  const getKey = ({myKey}) => console.log(myKey);
  getKey(myObject);   
};
getSortedArray(circle, 'x'); */

/* результат вызова функции getKey - undefined, но должно выводится значение ключа myKey. Что я делаю не правильно?*/