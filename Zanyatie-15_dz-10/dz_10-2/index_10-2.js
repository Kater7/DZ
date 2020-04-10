const onDataLoaded = function(text) {
    console.log(text);

    const lines = text.split('\n');

    const names = lines.shift().trim().split(', ');
    // console.log(lines, names);

    const items = lines.map(line => {
        const splitted = line.split(', ');
        // console.log(splitted);

        const object = splitted.reduce((result, value, index) => ({
            ...result,
            [names[index]]: value
        }), {});
        console.log(object);
        return object;
    });
    // console.log(items);

    const dataTable = document.getElementById('data-table');
    const thead = document.getElementById('thead');

    thead.insertAdjacentHTML('beforeend', `<tr>
    <td class="table-head">${names[0]}</td>
    <td class="table-head">${names[1]}</td>
    <td class="table-head">${names[2]}</td>
    <td class="table-head">${names[3]}</td>
    <td class="table-head">${names[4]}</td>
    </tr>`);

    const renderRows = function(items) {
        dataTable.innerHTML = '';
        for (let i = 0; i < items.length; i++) {
            dataTable.insertAdjacentHTML('beforeend', `<tr>
        <td>${items[i].name}</td>
        <td>${items[i].age}</td>
        <td>${items[i].position}</td>
        <td>${items[i].salary}</td>
        <td>${items[i].chief}</td>
        </tr>`);
        }

    }

    renderRows(items);

    const tableHead = document.getElementsByClassName('table-head');
    for (let i = 0; i < tableHead.length; i++) {
        tableHead[i].addEventListener('click', function() {
            // console.log(items);
            const key = names[i];
            // console.log(key);

            const copy = [...items];
            copy.sort((a, b) => a[key] > b[key] ? 1 : -1);
            renderRows(copy);

        });
    }
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data_10-2.csv', true);
xhr.onload = function() {
    onDataLoaded(xhr.responseText);
}
xhr.send(null);

































// let items = [];

// const onDataLoaded = function(text) {
//     console.log(text);

//     // сначала text в csv разобьем по знаку переноса с помощью split('\n'). Получится массив из четырех строчек
//     // теперь каждый элемент массива нужно превратить в массив из строк - для этого воспользуемся map. 
//     // А потом строку разобьём по запятой с пробелом - split
//     items = text.split('\n').map(line => line.trim().split(', '));
//     // получили массив из массивов, в каждом из которых есть нужные нам данные

//     for (let i = 0; i < items.length; i++) {
//         const tr = document.createElement('tr');

//         for (let j = 0; j < items[i].length; j++) {
//             if (i === 0) {
//                 tr.insertAdjacentHTML('beforeend', `<td class="table-head">${items[i][j]}</td>`);
//             } else {
//                 tr.insertAdjacentHTML('beforeend', `<td>${items[i][j]}</td>`);
//             }
//         }
//         const dataTable = document.getElementById('data-table');
//         dataTable.appendChild(tr);
//     }

//     console.log(items);
// }

// items.sort(function(a, b) {
//     if (a[1] > b[1]) {
//         return 1;
//     }
//     if (a[1] < b[1]) {
//         return -1;
//     }
//     return 0;
// });
// console.log(items);

// // const tablehead = document.getElementsByClassName('table-head');
// // console.log(tablehead);
// // for (let i = 0; i <= tablehead.length; i++) {
// //     tablehead[i].addEventListener('click', function() {
// //         console.log("hi");
// //         // items.sort();
// //     });
// // }


// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'data_10-2.csv', true);
// xhr.onload = function() {
//     onDataLoaded(xhr.responseText);
// }
// xhr.send(null);