function getGeoCoords() {
    return new Promise(function(resolve, reject) {
        window.navigator.geolocation.getCurrentPosition(function(pos) {
            const geoPosition = {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            };
            resolve(geoPosition);
        }, function(err) {
            reject(err);
        })
    })
}

function getXhr(path) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
        }
        xhr.onerror = () => reject();
        xhr.send(null)
    })
}

function getDistHaversinusFormula(lat1, lat2, long1, long2) {
    return new Promise(function(resolve, reject) {
        const R = 6371;
        const lat1Radian = (lat1 * 3.14 / 180);
        const lat2Radian = (lat2 * 3.14 / 180);
        const long1Radian = (long1 * 3.14 / 180);
        const long2adian = (long2 * 3.14 / 180);

        const forSinLat = (lat2Radian - lat1Radian) / 2;
        const forSinLong = (long2adian - long1Radian) / 2;

        const squareRoot = ((Math.sin(forSinLat) ** 2) + Math.cos(lat1Radian) * Math.cos(lat2Radian) * (Math.sin(forSinLong) ** 2)) ** 1 / 2;

        const distance = 2 * R * Math.asin(squareRoot);

        resolve(distance);
    }, function(err) {
        reject(err);
    })
}

async function initApp() {
    const userGeoCoords = await getGeoCoords();

    const userCoordsFromFreegeoip = await getXhr('https://freegeoip.app/json/');

    const distanceBetweenCoords = await getDistHaversinusFormula(userGeoCoords.latitude, userCoordsFromFreegeoip.latitude, userGeoCoords.longitude, userCoordsFromFreegeoip.longitude);

    const infoTable = document.getElementById('info-table');
    infoTable.innerHTML = `<tr><td></td><td>Широта</td><td>Долгота</td></tr>
    <tr><td>Координаты пользователя</td><td>${(userGeoCoords.latitude).toFixed(4)}</td><td>${(userGeoCoords.latitude).toFixed(4)}</td></tr>
    <tr><td>Координаты, полученные с IP-сервиса</td><td>${userCoordsFromFreegeoip.latitude}</td><td>${userCoordsFromFreegeoip.longitude}</td></tr>`;

    const infoBox = document.getElementById('info-box');
    infoBox.insertAdjacentHTML('beforeend', `<div class="distance-info">Расстояние между геокоординатами пользователя и координатами, полученными с IP-сервиса: <span>${(distanceBetweenCoords * 1000).toFixed(1)} м</span><div>`);

    const fileForLocationSearch = `https://www.metaweather.com/api/location/search/?lattlong=${userCoordsFromFreegeoip.latitude},${userCoordsFromFreegeoip.longitude}`;
    const locationSearch = await getXhr(fileForLocationSearch);

    const nearestCitiesToUserLocation = [];
    for (let i = 1; i < 6; i++) {
        const fileLocation = `https://www.metaweather.com/api/location/${locationSearch[i].woeid}/`;
        const fiveCities = await getXhr(fileLocation);
        nearestCitiesToUserLocation.push(fiveCities);
    }

    const table = document.createElement('table');
    table.classList.add("weather-table");
    table.innerHTML = `<thead><tr><td>Город</td><td>Дата</td><td>Состояние погоды</td><td>Max температура</td><td>Min температура</td><td>Скорость ветра, м/с</td></tr></thead>`;
    for (let i = 0; i < nearestCitiesToUserLocation.length; i++) {
        table.insertAdjacentHTML('beforeend', `<tr>
        <td>${nearestCitiesToUserLocation[i].title}</td>
        <td>${nearestCitiesToUserLocation[i].consolidated_weather[0].applicable_date}</td>
        <td>${nearestCitiesToUserLocation[i].consolidated_weather[0].weather_state_name}</td>
        <td>${(nearestCitiesToUserLocation[i].consolidated_weather[0].max_temp).toFixed(1)}</td>
        <td>${(nearestCitiesToUserLocation[i].consolidated_weather[0].min_temp).toFixed(1)}</td>
        <td>${(nearestCitiesToUserLocation[i].consolidated_weather[0].wind_speed).toFixed(1)}</td>
        </tr>`);
    }
    infoBox.appendChild(table);
}

initApp();