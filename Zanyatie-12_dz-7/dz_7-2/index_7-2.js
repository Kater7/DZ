const moneyUSD = 0.43;
const moneyEUR = 0.38;
const moneyBYN = 1;
const moneyUAH = 11.76;

const clickHandler = function() {
    const number = Number(document.getElementById('number').value);
    const currencyFrom = document.getElementById('currencyFrom').value;
    const currencyTo = document.getElementById('currencyTo').value;
    const resultField = document.getElementById('result-span');

    if (currencyFrom == 'USD') {
        switch (currencyTo) {
            case 'EUR':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyEUR / moneyUSD).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'BYN':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyBYN / moneyUSD).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'UAH':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyUAH / moneyUSD).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'USD':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${number} ${currencyTo}</div>`;
                break;
        }
    }

    if (currencyFrom == 'EUR') {
        switch (currencyTo) {
            case 'USD':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyUSD / moneyEUR).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'BYN':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyBYN / moneyEUR).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'UAH':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyUAH / moneyEUR).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'EUR':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${number} ${currencyTo}</div>`;
                break;
        }
    }

    if (currencyFrom == 'BYN') {
        switch (currencyTo) {
            case 'EUR':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyEUR / moneyBYN).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'USD':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyUSD / moneyBYN).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'UAH':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyUAH / moneyBYN).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'BYN':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${number} ${currencyTo}</div>`;
                break;
        }
    }

    if (currencyFrom == 'UAH') {
        switch (currencyTo) {
            case 'EUR':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyEUR / moneyUAH).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'BYN':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyBYN / moneyUAH).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'USD':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${(number * moneyUSD / moneyUAH).toFixed(2)} ${currencyTo}</div>`;
                break;
            case 'UAH':
                resultField.innerHTML = `<div>${number} ${currencyFrom} = ${number} ${currencyTo}</div>`;
                break;
        }
    }
}

number.addEventListener('keyup', clickHandler);
currencyFrom.addEventListener('click', clickHandler);
currencyTo.addEventListener('click', clickHandler);