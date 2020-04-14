function createNetworksList(dataArray) {
    const networks = document.getElementById('networks');

    for (let i = 0; i < dataArray.length; i++) {
        networks.insertAdjacentHTML('beforeend', `<div class="trading-network">${dataArray[i].name}</div>
                                                  <div class="place-for-shops-info"></div>`);
    }

    const tradingNetwork = document.getElementsByClassName('trading-network');

    let shopJsonAdress = "";

    for (let i = 0; i < tradingNetwork.length; i++) {
        tradingNetwork[i].addEventListener('click', function(event) {
            if (event.target) {
                shopJsonAdress = dataArray[i].jsonAdress;
            }

            loadNetworkShopsFile(shopJsonAdress, createShopsList);
        });
    }
}

function createShopsList(shopsData) {
    const placeForShopsInfo = document.getElementsByClassName('place-for-shops-info');

    for (let i = 0; i < placeForShopsInfo.length; i++) {
        placeForShopsInfo[i].innerHTML = "";
        placeForShopsInfo[i].insertAdjacentHTML('beforeend', `<table id="shops-table"></table>
                                                       <div id="text-shops-info"></div`);

        const shopsTable = document.getElementById('shops-table');
        const textShopsInfo = document.getElementById('text-shops-info');

        let totalShopsInNetwork = shopsData.length;
        let sumArea = 0;
        let sumNumberOfBuyers = 0;

        for (let j = 0; j < shopsData.length; j++) {
            sumArea += shopsData[j].salesArea;
            sumNumberOfBuyers += shopsData[j].numberOfBuyers;

            shopsTable.insertAdjacentHTML('beforeend', `<tr>
                                        <td>${shopsData[j].adress}</td>
                                        <td>${shopsData[j].numberOfBuyers}</td>
                                        <td>${shopsData[j].salesArea}</td>
                                        <td>${shopsData[j].year}</td>
                                        </tr>`);
        }

        let averageArea = (sumArea / totalShopsInNetwork).toFixed(1);

        textShopsInfo.insertAdjacentHTML('beforeend', `<div>Количество магазинов сети - ${totalShopsInNetwork}</div>
                                      <div>Суммарная площадь магазинов сети ${sumArea} кв.м</div>
                                      <div>Cредняя площадь магазинов сети ${averageArea} кв.м</div>
                                      <div>Суммарное дневное число посетителей всех магазинов в сети ${sumNumberOfBuyers} человек</div>`);
    }
}

function loadNetworkShopsFile(shopJsonAdress, createShopsList) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', shopJsonAdress, true);
    xhr.onload = function() {
        const shopsData = JSON.parse(xhr.responseText);

        createShopsList(shopsData);
    }
    xhr.send(null);
}

function loadTradingNetworkFile() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'trading-networks.json', true);
    xhr.onload = function() {
        const dataArray = JSON.parse(xhr.responseText);

        createNetworksList(dataArray);
    }
    xhr.send(null);
}
loadTradingNetworkFile();