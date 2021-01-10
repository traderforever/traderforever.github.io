let file = document.documentURI.split(/[/.]/g).slice(-2,-1).toString();
let id;
let townName;
switch(file) {
    case "sodasprings":
        id = "id=5607916";
        townName = "Soda Springs";
        break;
    case "fishhaven":
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


const apiURLb =
  "https://api.openweathermap.org/data/2.5/forecast?" + id + "&units=imperial&appid=375250a6426c22d4ea2c2d940a245bf9";
  const apiIconURL = "https://openweathermap.org/img/w/"

  fetch(apiRULb)
  .then(function (response) {
      return response.json();
  })
  .then(function (jsonObject) {

    const forecast = fiveDays.list.filter((x) => x.dt_txt.includes("18:00:00"));

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const towns = jsonObject['towns'];
    const myTowns = towns.filter(town => (town.name == townName));

    for (i = 0; i < forecast.length; i++) {
        let li = document.createElement('li');
        let day = document.createElement('p');
        let icon = document.createElement('img');
        let temp = document.createElement('p');

        let date = new Date(forecast[i].dt_txt);
        day.textContent = weekdays[date.getDay()];

        icon.src = apiIconURL + forecast[i].weather[0].icon + ".png";
        icon.alt = forecast[i].weather[0].description;

        temp.textContent = forecast[i].main.temp + "°F";

        li.append(day);
        li.append(icon);
        li.append(temp);

        document.getElementById('five-day-flex').appendChild(li);
    }
  });

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?" + id + "&units=imperial&appid=375250a6426c22d4ea2c2d940a245bf9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("temp").textContent =
      Math.round(jsObject.main.temp) + "°F";
    document.getElementById("speed").textContent = jsObject.wind.speed + " mph";
    document.getElementById("humidity").textContent =
      jsObject.main.humidity + " %";
    // document.getElementById('weather').textContent = jsObject.weather[1].main;
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    const desc = jsObject.weather[0].description;

    let windchill;
    if (temp <= 50.0 && speed > 3.0) {
      //Calculate windchill:
      windchill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windspeed, 0.16) +
        0.4275 * temp * Math.pow(windspeed, 0.16);

      //Calculate Decimal Place
      let digits = 2;
      let multiplier = Math.pow(10, digits);
      windchill = Math.round(windchill * multiplier) / multiplier + "°F";
    } else {
      windchill = "N/A";
    }
    document.getElementById("windChill").textContent = windchill;
  });