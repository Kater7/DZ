const N = +prompt('Enter number');
const numbers = document.getElementById("myNum");

for (let i = 1; i <= N; i++) {
    const myRow = document.createElement('tr');
    numbers.appendChild(myRow);

    for (let j = 1; j <= N; j++) {
        const myColumn = document.createElement('td');
        myRow.appendChild(myColumn);
        myColumn.innerText = `${i} * ${j} = ${i * j}`;
    }
}