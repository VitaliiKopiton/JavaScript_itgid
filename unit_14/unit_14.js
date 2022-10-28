let CityID = 6548066;

document.querySelector('.city').onchange = function () {


    CityID = document.querySelector('.city').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${CityID}&appid=fc8d31d28c201415639891717ed52d7b`)
        .then(function (response) {
            return response.json();;
        })
        .then(function (date) {
            console.log(date);
            // document.querySelector('.out').innerHTML = 'hfs';
        })
}
// document.querySelector('.out').innerHTML = 'Hello';