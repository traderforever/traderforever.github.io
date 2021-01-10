const apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&appid=ee189add9d813bd1f5581c1b85f8e1d1&units=imperial";
const heroURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=ee189add9d813bd1f5581c1b85f8e1d1&units=imperial";



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
    let chillFactor;
    let tp = parseFloat(document.querySelector(".curWeather"));
    let ws = parseFloat(document.querySelector(".wS"));
    if ( tp <= 50.0 && ws > 3.0) {
        chillFactor = 35.74 + (0.6215 * tp) - (35.75 * Math.pow(ws,0.16)) + (0.4275 * tp * Math.pow(ws,0.16))
        document.querySelector("#windCh").innerHTML = Math.ceil(chillFactor)  + "°F";
      }
    
    else {
        document.querySelector("#windCh").innerHTML = "N/A"
        
    }
    document.getElementById('windCh').textContent = chillFactor;
  
    


  });
// 5 DAY FORECAST //
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {





const forecast = jsObject.list.filter(sortValue => sortValue.dt_txt.includes('18:00:00'));


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



const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const myTowns = towns.filter(town => (town.name == "Fish Haven"));
        myTowns.forEach(town => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let townEvents1 = document.createElement('p');
            let townEvents2 = document.createElement('p');
            let townEvents3 = document.createElement('p');
            let townEvents4 = document.createElement('p');

            card.className = "eventCSS";
            h2.textContent = `${town.name} Events:`;
            townEvents1.textContent = town.events[0];
            townEvents2.textContent = town.events[1];
            townEvents3.textContent = town.events[2];
            townEvents4.textContent = town.events[3];


            card.appendChild(h2);
            card.appendChild(townEvents1);
            card.appendChild(townEvents3);
            card.appendChild(townEvents3);
            card.appendChild(townEvents4);


            document.querySelector('.eventPlanner').appendChild(card);
          });
});