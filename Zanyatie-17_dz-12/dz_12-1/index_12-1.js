const prodactsList = document.getElementById('prodacts-list');
const basket = document.getElementById('basket');
const basketListTable = document.getElementById('basket-list-table');

function getProdactsList(data) {
    for (let i = 0; i < data.length; i++) {
        prodactsList.insertAdjacentHTML('beforeend', `<div class="list">
        <li><img src="${data[i].image}"></li>
        <li class="name">${data[i].name}</li>
        <li class="about">${data[i].about}</li>
        <li class="quantity">Количество на складе: ${data[i].number} шт</li>
        <button type="button" class="prodact-basket">В корзину</button>
        <div>`)
    }

    const prodactBasket = document.getElementsByClassName('prodact-basket');

    let basketList = localStorage.prodactsBasket ? JSON.parse(localStorage.prodactsBasket) : [];

    basket.value = Number(localStorage.count) || 0;

    for (let i = 0; i < prodactBasket.length; i++) {
        prodactBasket[i].addEventListener('click', function(event) {
            if (event.target) {
                basket.value++;
                localStorage.count = basket.value;

                basketList.push(data[i]);

                localStorage.prodactsBasket = JSON.stringify(basketList);
            }
        });
    }

    basket.addEventListener('click', function() {
        const table = document.createElement('table');
        basketListTable.innerHTML = `<div class="basket-name">Товары в корзине:</div>`;
        for (let i = 0; i < basketList.length; i++) {
            table.insertAdjacentHTML('beforeend', `<tr>
                <td><img src="${basketList[i].image}"></td>
                <td class="name">${basketList[i].name}</td>
                </tr>`);
        }
        basketListTable.appendChild(table);
    });
}

const xhr = new XMLHttpRequest();
xhr.open('GET', 'product-list.json', true);
xhr.onload = function() {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    getProdactsList(data);
}
xhr.send(null);