/* Создать функцию
6.1.3. Расстояние между двумя объектами-точками */

const point1 = {
  x: 2,
  y: 3
}

const point2 = {
  x: -2,
  y: 4
}

const getDistance = (p1, p2) => ((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2) ** 1 / 2;
console.log(getDistance(point1, point2));