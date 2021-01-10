const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ee189add9d813bd1f5581c1b85f8e1d1&units=imperial";
const heroURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ee189add9d813bd1f5581c1b85f8e1d1&units=imperial";



// HERO FORECAST //
fetch(heroURL)
  .then((response) => response.json())
  .then((jsObject) => {


    document.getElementById('curWeather').textContent = jsObject.weather[0].description;
    document.getElementById('tempCurrent').textContent = jsObject.main.temp;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wS').textContent = jsObject.wind.speed;
    // <h3><span id="curWeather"></span> - High: <span id="tempCurrent"></span>
    //°F - Humidity: <span id="humid"></span>% - Wind Speed <span id="wS"></span>mph - Wind Chill <span id="windCh"></span></h3>
    let tp = parseFloat(document.querySelector(".tempCurrent"));
    let ws = parseFloat(document.querySelector(".wS"));
    
    if ( tp <= 50.0 && ws > 3.0) {
        let chillFactor = 35.74 + (0.6215 * tp) - (35.75 * Math.pow(ws,0.16)) + (0.4275 * tp * Math.pow(ws,0.16))
        document.querySelector("#windCh").innerHTML = Math.ceil(chillFactor)  + "°F";
      }
    
    else {
        document.querySelector("#windCh").innerHTML = "N/A"
        
    }
    document.getElementById('windCh').innerHTML = chillFactor;
  
    


  });
// 5 DAY FORECAST //
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);




const forecast = jsObject.list.filter(sortValue => sortValue.dt_txt.includes('18:00:00'));
console.log(forecast);

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for (let day = 0; day < forecast.length; day++) {
const d = new Date(forecast[day].dt_txt);
const imageS = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
const desc = forecast[day].weather[0].description;

    document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
    document.getElementById(`imagesrc${day+1}`).setAttribute('src', imageS) ;
    document.getElementById(`imagesrc${day+1}`).setAttribute('alt', desc) ;
    document.getElementById(`forecast${day+1}`).textContent = forecast[day].main.temp;

}

});