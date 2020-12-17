const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5000&lon=-86.9500&exclude=minutely,hourly&appid=ee189add9d813bd1f5581c1b85f8e1d1&units=imperial";


const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const imageS = "https://openweathermap.org/img/wn/"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {


    let curr = jsObject.current;
    let daily = jsObject.daily;
    let alerts = jsObject.alerts;
    console.log(alerts);

    let currtemp = parseFloat(curr.temp);
    
    document.getElementById('currtemp').textContent = currtemp + "°F";
    document.getElementById('condition').textContent =  curr.weather[0].description;
    document.getElementById('humidity').textContent = curr.humidity + "%";

//






    
    for (i = 0; i < 3; i++) {
        let li = document.createElement('li');
        let ul = document.createElement('ul');
        let day = document.createElement('li');
        let iconLi = document.createElement('li');
        let icon = document.createElement('img');
        let temp = document.createElement('li');        
        
        let date = new Date(daily[i].dt * 1000);
        day.textContent = weekdays[date.getDay()];
  
        icon.src = imageS + daily[i].weather[0].icon + ".png";
        icon.alt = daily[i].weather[0].description;
  
        temp.textContent = daily[i].temp.day + "°F";

        iconLi.append(icon);
  
        li.append(ul);
        ul.append(day)
        ul.append(iconLi);
        ul.append(temp);
  
        document.getElementById('forecastThree').appendChild(li);
    }

    if(alerts != null ) {
        let event = document.getElementById('event');
        let desc = document.getElementById('description');
        event.textContent = "Weather Advisory: " + alerts[0].event;
        description.textContent = alerts[0].description;
        document.getElementById('alert').classList.toggle('hidden');
    }
});