const daysAbv = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

let file = document.documentURI.split(/[/.]/g).slice(-2,-1).toString();
let id;
let townName;
switch(file) {
    case "sodasprings":
        id = "id=5607916";
        townName = "Soda Springs";
        break;
    case "fishhaven":
        //id = "5585010"
        id = "lat=42.0380399&lon=-111.4048681";
        townName = "Fish Haven"
        break;
    case "preston":
        id = "id=5604473";
        townName = "Preston"
        break;
    default:
        id = "id=5604473"
        townName = "Preston"
        break;
}

let apiURL = "https://api.openweathermap.org/data/2.5/weather?" + id + "&units=imperial&appid=61c06afff8be57bc36e4e0cf4f4020bb";
const apiIconURL = "https://openweathermap.org/img/w/"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let iconsrc = apiIconURL + jsObject.weather[0].icon + ".png";
    let desc = jsObject.weather[0].description;

    let temp = parseFloat(jsObject.main.temp);
    let windspeed = parseFloat(jsObject.wind.speed);

    document.getElementById('weather-summary-temp').textContent = temp + "°F"
    document.getElementById('weather-summary-desc').textContent =  jsObject.weather[0].description;
    document.getElementById('weather-summary-temp_max').textContent = jsObject.main.temp_max + "°F";
    document.getElementById('weather-summary-windspeed').textContent = windspeed +" mph";
    document.getElementById('weather-summary-humidity').textContent = jsObject.main.humidity + "%";

    let windchill;
    if (temp <= 50.0 && windspeed > 3.0) {
        //Calculate windchill:
        windchill = 35.74 + 0.6215 * temp - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));

        //Calculate Decimal Place
        let digits = 2;
        let multiplier = Math.pow(10, digits);
        windchill = (Math.round(windchill * multiplier) / multiplier) + "°F";
    } else {
        windchill = "N/A";
    }

    document.getElementById('weather-summary-windchill').textContent = windchill;
    
  });

apiURL = "https://api.openweathermap.org/data/2.5/forecast?" + id + "&units=imperial&appid=61c06afff8be57bc36e4e0cf4f4020bb";

fetch(apiURL)
.then((response) => response.json())
.then((fiveDays) => {
  //console.log(fiveDays);

  const fiveDaysAt1800 = fiveDays.list.filter(entry => new Date(entry.dt_txt).getHours() == 18 );
  //console.log(fiveDaysAt1800);

  for (i = 0; i < fiveDaysAt1800.length; i++) {
      let li = document.createElement('li');
      let day = document.createElement('p');
      let icon = document.createElement('img');
      let temp = document.createElement('p');

      let date = new Date(fiveDaysAt1800[i].dt_txt);
      day.textContent = daysAbv[date.getDay()];

      icon.src = apiIconURL + fiveDaysAt1800[i].weather[0].icon + ".png";
      icon.alt = fiveDaysAt1800[i].weather[0].description;

      temp.textContent = fiveDaysAt1800[i].main.temp + "°F";

      li.append(day);
      li.append(icon);
      li.append(temp);

      document.getElementById('five-day-flex').appendChild(li);
  }
});

apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(apiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);
        const towns = jsonObject['towns'];
        const myTowns = towns.filter(town => (town.name == townName));
        for (let i = 0; i < myTowns.length; i++ ) {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let img = document.createElement('img');
            let motto = document.createElement('h4');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');

            div.className = "town-content";
            h3.textContent = "Town Details";
            h3.className = "town-header";
            img.src = "images/" + myTowns[i].photo;
            img.alt = myTowns[i].name + " weather photo.";
            img.className = "town-img";
            motto.textContent = myTowns[i].motto;
            yearFounded.innerHTML = "<span>Year Founded: </span>" + myTowns[i].yearFounded;
            currentPopulation.innerHTML = "<span>Population: </span>" + myTowns[i].currentPopulation;
            averageRainfall.innerHTML = "<span>Annual Rain Fall: </span>" + myTowns[i].averageRainfall;
            
            div.appendChild(h3);
            div.appendChild(motto);
            div.appendChild(yearFounded);
            div.appendChild(currentPopulation);
            div.appendChild(averageRainfall);

            card.appendChild(div);
            card.appendChild(img);
            
            document.getElementById('town-details').appendChild(card);

            let eventcard = document.createElement('section');
            let eventdiv = document.createElement('div');
            let eventh3 = document.createElement('h3');
            let eventul = document.createElement('ul');

            eventh3.textContent = "Events"

            for (let ii = 0; ii < myTowns[i].events.length; ii++) {
              let eventli = document.createElement('li');
              eventli.textContent = myTowns[i].events[ii];
              eventul.appendChild(eventli);
            }

            eventdiv.appendChild(eventh3);
            eventdiv.appendChild(eventul)

            eventcard.appendChild(eventdiv);

            document.getElementById('town-events').appendChild(eventcard);
        }
    });
  
