const house = {
  address: 'Minsk Mira str, 9',
  year: 1995,
  flors: 2,
  flats: [],
  getHouseArea() {
    let sumHouseArea = 0;
    for (let i = 0; i < this.flats.length; i++) {
      sumHouseArea += this.flats[i].area;
    }
    return sumHouseArea;
  },
  getHousePopulation() {
    let sumHousePopulation = 0;
    for (let i = 0; i < this.flats.length; i++) {
      sumHousePopulation += this.flats[i].people;
    }
    return sumHousePopulation;
  },
  calculateYearService() {
    let sumYearService = 0;
    for (let i = 0; i < this.flats.length; i++) {
      for (let j = 1; j <= 12; j++) {
        sumYearService += this.flats[i].calculateService(j);
      }
    }
    return sumYearService;
  },
  getAveragePopulation() {
    return Math.round(this.getHouseArea() / this.getHousePopulation());
  }
};

const flat1 = {
  rooms: 2,
  people: 2,
  area: 45,
  flor: 1,
  flatNum: 1,
  calculateService(month) {
    let monthCoefficient = 0;
    if (month >= 4 && month <= 10) {
      monthCoefficient = 1;
    } else {
      monthCoefficient = 1.8;
    }
    return monthCoefficient * this.area * this.people / 2;
  }
}
house.flats.push(flat1);

const flat2 = {
  rooms: 3,
  people: 3,
  area: 65,
  flor: 1,
  flatNum: 2,
  calculateService(month) {
    let monthCoefficient = 0;
    if (month >= 4 && month <= 10) {
      monthCoefficient = 1;
    } else {
      monthCoefficient = 1.8;
    }
    return monthCoefficient * this.area * this.people / 2;
  }
}
house.flats.push(flat2);

const flat3 = {
  rooms: 2,
  people: 2,
  area: 45,
  flor: 1,
  flatNum: 3,
  calculateService(month) {
    let monthCoefficient = 0;
    if (month >= 4 && month <= 10) {
      monthCoefficient = 1;
    } else {
      monthCoefficient = 1.8;
    }
    return monthCoefficient * this.area * this.people / 2;
  }
}
house.flats.push(flat3);

const flat4 = {
  rooms: 2,
  people: 2,
  area: 45,
  flor: 2,
  flatNum: 4,
  calculateService(month) {
    let monthCoefficient = 0;
    if (month >= 4 && month <= 10) {
      monthCoefficient = 1;
    } else {
      monthCoefficient = 1.8;
    }
    return monthCoefficient * this.area * this.people / 2;
  }
}
house.flats.push(flat4);

const flat5 = {
  rooms: 3,
  people: 3,
  area: 65,
  flor: 2,
  flatNum: 5,
  calculateService(month) {
    let monthCoefficient = 0;
    if (month >= 4 && month <= 10) {
      monthCoefficient = 1;
    } else {
      monthCoefficient = 1.8;
    }
    return monthCoefficient * this.area * this.people / 2;
  }
}
house.flats.push(flat5);

const flat6 = {
  rooms: 2,
  people: 2,
  area: 45,
  flor: 2,
  flatNum: 6,
  calculateService(month) {
    let monthCoefficient = 0;
    if (month >= 4 && month <= 10) {
      monthCoefficient = 1;
    } else {
      monthCoefficient = 1.8;
    }
    return monthCoefficient * this.area * this.people / 2;
  }
}
house.flats.push(flat6);

console.log(flat1.calculateService(5)); //размер коммунальн.услуг
console.log(flat2.calculateService(12)); //размер коммунальн.услуг
console.log(flat1.calculateService(1)); //размер коммунальн.услуг
console.log(flat2.calculateService(10)); //размер коммунальн.услуг

console.log('Суммарная жилая площадь дома ' + house.getHouseArea() + 'м^2'); 
console.log('Население дома ' + house.getHousePopulation() + 'чел.'); 
console.log('Cуммарное годовое обслуживание всех квартир ' + house.calculateYearService()); 
console.log('Средняя плотность населения ' + house.getAveragePopulation() + 'м^2/чел'); 
console.log(house);