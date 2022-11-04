const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "fc8d31d28c201415639891717ed52d7b"
}

const cities = {
    "Kyiv": "703448",
    "Kharkiv": "706483",
    "Odesa": "698740",
    "Dnipro": "709930",
    "Donetsk": "709717"
}

for (key in cities) {
    let newCity = document.createElement('option');
    newCity.value = cities[key];
    newCity.innerHTML = key;
    document.querySelector('.city').append(newCity);
}

// let out = document.querySelector('.out');

getWeather();

function getWeather() {

    const cityID = document.querySelector('.city').value;

    fetch(`${param.url}weather?id=${cityID}&appid=${param.appid}`)
        .then(function (response) {
            return response.json();;
        })
        .then(showWeater);

}


let nameCity = document.querySelector('.name');
let temp = document.querySelector('.temp');
let icon = document.querySelector('.icon');
let description = document.querySelector('.description');

function showWeater(date) {

    nameCity.innerHTML = date.name;
    temp.innerHTML = (date.main.temp - 273.15).toFixed(1) + '&#176C';
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${date.weather[0].icon}@2x.png">`;
    description.innerHTML = date.weather[0].description;
    console.log(date);

}


document.querySelector('.city').onchange = function () {
    getWeather();
}