const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "fc8d31d28c201415639891717ed52d7b"
}

let out = document.querySelector('.out');

getWeather();

function getWeather() {

    const cityID = document.querySelector('.city').value;

    fetch(`${param.url}weather?id=${cityID}&appid=${param.appid}`)
        .then(function (response) {
            return response.json();;
        })
        // .then(showWeater);
        .then(function (date) {
            // console.log(date.main.temp.toFixed(1));
            out.innerHTML = (date.main.temp - 273.15).toFixed(1);
        })

}

document.querySelector('.city').onchange = function () {
    getWeather();
}