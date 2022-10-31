const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "fc8d31d28c201415639891717ed52d7b"
}

const cities = {
    "6548066": "Kyiv",
    "706483": "Kharkiv",
    "698740": "Odesa",
    "709930": "Dnipro",
    "709717": "Donetsk"
}

let out = document.querySelector('.out');

// document.querySelector('#select') = 



getWeather();

function getWeather() {

    const cityID = document.querySelector('.city').value;

    fetch(`${param.url}weather?id=${cityID}&appid=${param.appid}`)
        .then(function (response) {
            return response.json();;
        })
        .then(showWeater);
    // .then(function (date) {
    //     // console.log(date.main.temp.toFixed(1));
    //     // out.innerHTML = (date.main.temp - 273.15).toFixed(1);
    // })

}

function showWeater(date) {

    out.innerHTML = (date.main.temp - 273.15).toFixed(1);

}

document.querySelector('.city').onchange = function () {
    getWeather();
}