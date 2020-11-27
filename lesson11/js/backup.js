const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ee189add9d813bd1f5581c1b85f8e1d1&units=imperial";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);




const forecast = jsObject.list.filter(sortValue => sortValue.dt_txt.includes('18:00:00'));
console.log(forecast);

let day = 0;
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// const weaIcon = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);


// forecast.forEach(x => {
// const d = new Date(forecast.dt_txt);
// document.getElementById(`dayofweek${day+1}`).textContent = x[d.getDay()];
// // document.getElementById(`imagesrc${day+1}`).textContent = x.weather.icon;
// document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
// day++;
// });
const urlP1 = 'https://openweathermap.org/img/w/';
const urlP2 = '.png';
for (let day = 0; day < forecast.length; day++) {
const d = new Date(forecast[day].dt_txt);
// const imageS = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
// const desc = forecast[day].weather[0].description;

    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    // document.getElementById(`imagesrc${day+1}`).setAttribute('src', imageS) ;
    // document.getElementById(`imagesrc${day+1}`).setAttribute('alt', desc) ;
    document.getElementById(`forecast${day+1}`).textContent = forecast[day].main.temp;

    // document.getElementById(`dayofweek${day}`).textContent = weekdays[d.getDay()];
    // document.getElementById(`imagesrc${day}`).setAttribute('src', imageS) ;
    // document.getElementById(`imagesrc${day}`).setAttribute('alt', desc) ;
	// document.getElementById(`forecast${day}`).textContent = forecast[day].main.temp;
}

});