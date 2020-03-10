const products = [];

const product1 = {
    image: "images/burgundy_hat.jpg",
    name: "Burgundy Hat",
    about: "This is burgundy winter hat",
    number: 1,
    price: 25
}
products.push(product1);

const product2 = {
    image: "images/green_hat.jpg",
    name: "Green Hat",
    about: "This is green winter hat",
    number: 2,
    price: 20
}
products.push(product2);

const product3 = {
    image: "images/pink_hat.jpg",
    name: "Pink Hat",
    about: "This is pink winter hat",
    number: 3,
    price: 30
}
products.push(product3);

const product4 = {
    image: "images/red_hat.jpg",
    name: "Red Hat",
    about: "This is red demi hat",
    number: 4,
    price: 20
}
products.push(product4);

const product5 = {
    image: "images/gray_hat.jpg",
    name: "Gray Hat",
    about: "This is gray demi hat",
    number: 6,
    price: 30
}
products.push(product5);

const product6 = {
    image: "images/yellow_hat.jpg",
    name: "Yellow Hat",
    about: "This is yellow demi hat",
    number: 5,
    price: 25
}
products.push(product6);

const prodactTable = document.getElementById('myProdact');

for (let i = 0; i < products.length; i++) {
    prodactTable.insertAdjacentHTML('beforeend', `<div class="form">

          <li><img src="${products[i].image}"></li>
          <li class="name">${products[i].name}</li>
          <li>${products[i].about}</li>
          <li class="quantity">Quantity in stock ${products[i].number} psc</li>
          <li class="price">Price: ${products[i].price}$</li>

        <div>`);
}