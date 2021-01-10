




var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var response = JSON.parse(xhttp.responseText);
      var weatherDays = response.weatherDays;

    var dayOfWeek;

 if (currDay == 0) {
    dayOfWeek = weatherDays[5].day + ", " + weatherDays[5].weather + " - Humidity " + weatherDays[5].Humidity + "%";
 } else if (currDay == 1) {
    dayOfWeek = weatherDays[0].day + ", " + weatherDays[0].weather + " - Humidity " + weatherDays[0].Humidity + "%";
} else if (currDay == 2) {
    dayOfWeek = weatherDays[1].day + ", " + weatherDays[1].weather + " - Humidity " + weatherDays[1].Humidity + "%";
} else if (currDay == 3) {
    dayOfWeek = weatherDays[2].day + ", " + weatherDays[2].weather + " - Humidity " + weatherDays[2].Humidity + "%";
} else if (currDay == 4) {
    dayOfWeek = weatherDays[3].day + ", " + weatherDays[3].weather + " - Humidity " + weatherDays[3].Humidity + "%";
} else if (currDay == 5) {
    dayOfWeek = weatherDays[4].day + ", " + weatherDays[4].weather + " - Humidity " + weatherDays[4].Humidity + "%";
} else if (currDay == 6) {
    dayOfWeek = weatherDays[5].day + ", " + weatherDays[5].weather + " - Humidity " + weatherDays[5].Humidity + "%";
} else {
    dayOfWeek = "Our satellite undergoing maintenance";
  }


document.getElementById('weatherDays').innerHTML = dayOfWeek;
    } 
};



xhttp.open("GET", "weather.json", true);
xhttp.send();

let tp = parseFloat(document.querySelector("#tempF").innerHTML)
let ws = parseFloat(document.querySelector(".windSp").innerHTML)
if ( tp <= 50.0 && ws > 3.0) {
    let chillFactor = 35.74 + (0.6215 * tp) - (35.75 * Math.pow(ws,0.16)) + (0.4275 * tp * Math.pow(ws,0.16))
    document.querySelector("#chill").innerHTML = Math.ceil(chillFactor)
}
else {
    document.querySelector("#chill").innerHTML = "N/A"
}