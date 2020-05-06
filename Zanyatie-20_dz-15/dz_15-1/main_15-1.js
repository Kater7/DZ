function getData(path) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
        }
        xhr.onerror = () => reject();
        xhr.send(null);
    })
}

function getDistHaversinusFormula(lat1, lat2, long1, long2) {
    const R = 6371;
    const lat1Radian = (lat1 * 3.14 / 180);
    const lat2Radian = (lat2 * 3.14 / 180);
    const long1Radian = (long1 * 3.14 / 180);
    const long2adian = (long2 * 3.14 / 180);

    const forSinLat = (lat2Radian - lat1Radian) / 2;
    const forSinLong = (long2adian - long1Radian) / 2;

    const squareRoot = ((Math.sin(forSinLat) ** 2) + Math.cos(lat1Radian) * Math.cos(lat2Radian) * (Math.sin(forSinLong) ** 2)) ** (1 / 2);

    const distance = 2 * R * Math.asin(squareRoot);

    return distance;
}

function printInfo(sumDistance, totalDowntime) {
    const button = document.getElementById('button');
    const finalBlock = document.getElementById('final-block');

    button.addEventListener('click', function() {
        const speed = document.getElementById('speed');
        const totalTime = sumDistance / (speed.value);

        finalBlock.insertAdjacentHTML('beforeend', `<div>Время, необходимое для преодоления расстояния гонки - <span>${(totalTime).toFixed(1)} ч.</span></div>
      <div>Суммарное время простоев - <span>${totalDowntime} мин.</span></div>
      <div>Время завершения гонки (с учетом простоев) - <span>${(totalTime + totalDowntime).toFixed(1)} ч.</span></div>`);
    });
}

class App {
    constructor(elem) {
        this.elem = elem;
        this.map = null;
        this.mapPoints = [];
    }

    async start() {
        const racePoints = await getData('racePoints.json');
        this.mapPoints = racePoints;

        ymaps.ready(() => this.initMap());

        let sumDistance = 0;
        let totalDowntime = 0;

        for (let i = 0; i < this.mapPoints.length - 1; i++) {
            const dist = getDistHaversinusFormula(this.mapPoints[i].latitude, this.mapPoints[i + 1].latitude, this.mapPoints[i].longitude, this.mapPoints[i + 1].longitude);

            sumDistance += dist;
        }

        for (let i = 0; i < this.mapPoints.length; i++) {
            const downtime = this.mapPoints[i].downtime;
            totalDowntime += downtime;
        }

        printInfo(sumDistance, totalDowntime);
    }

    initMap() {
        this.map = new ymaps.Map("map", {
            center: [52.2138000, 24.3564000],
            zoom: 6
        });

        this.mapPoints.forEach((item) => {
            const point = new ymaps.Placemark([item.latitude, item.longitude], {
                balloonContent: `Время простоя: ${item.downtime} мин.`
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#3caa3c'
            });
            this.map.geoObjects.add(point);
        });

        const path = [];
        for (let i = 0; i < this.mapPoints.length; i++) {
            path.push([this.mapPoints[i].latitude, this.mapPoints[i].longitude]);
        }
        const line = new ymaps.Polyline(path, {
            hintContent: "Ломаная"
        }, {
            strokeColor: '#3caa3c',
            strokeWidth: 4
        });
        this.map.geoObjects.add(line);

    }
}

const app = new App(document.getElementById('app'));
app.start();