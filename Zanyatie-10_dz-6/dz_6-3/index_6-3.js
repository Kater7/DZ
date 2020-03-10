const myContries = [];

const firstCountry = {
    name: "Estonia",
    area: "45.23",
    population: "1.328",
    officialLanguage: "Estonian",
    telephoneCode: "+372",
    flag: "images/Estonia-mini.jpg"
}
myContries.push(firstCountry);

const secondCountry = {
    name: "Latvia",
    area: "64.59",
    population: "1.934",
    officialLanguage: "Latvian",
    telephoneCode: "+371",
    flag: "images/Latvia-mini.jpg"
}
myContries.push(secondCountry);

const thirdCountry = {
    name: "Lithuania",
    area: "65.3",
    population: "2.79",
    officialLanguage: "Lithuanian",
    telephoneCode: "+370",
    flag: "images/Litva-mini.jpg"
}
myContries.push(thirdCountry);

const country = document.getElementById('tableCountries');

country.insertAdjacentHTML('beforeend', `<tr>
      <th>Country</th>
      <th>Area, km.sqw</th>
      <th>Population, mln</th>
      <th>Language</th>
      <th>Tel.Code</th>
      <th>Flag</th>
    </tr>`);
for (let i = 0; i < myContries.length; i++) {
    country.insertAdjacentHTML('beforeend', `<tr>
      <td>${myContries[i].name}</td>
      <td>${myContries[i].area}</td>
      <td>${myContries[i].population}</td>
      <td>${myContries[i].officialLanguage}</td>
      <td>${myContries[i].telephoneCode}</td>
      <td><img src="${myContries[i].flag}"></td>
    </tr>`);
}