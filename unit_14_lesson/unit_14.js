

















// let city = 'Dnipro';
// // let city = 'Kiev';

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fc8d31d28c201415639891717ed52d7b`)
//     .then(function (resp) {
//         return resp.json();
//     })

//     .then(function (data) {
//         console.log(data);
//         console.log(data.name);
//         document.querySelector('.package-name').textContent = data.name;
//         document.querySelector('.price').innerHTML = (Math.round(data.main.temp - 273.15)) + '&deg';
//         document.querySelector('.disclaimer').innerHTML = data.weather[0].description;
//         document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

//     });

//--------------------------------------------------------------

// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// });


//--------------------------------------------------------------


// let arr2 = [22, 33, 4, 1, 5];
// arr2.sort();
// console.log(arr2);