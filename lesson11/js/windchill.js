let tp = parseFloat(document.querySelector(".curWeather").innerHTML)
let ws = parseFloat(document.querySelector(".wS").innerHTML)
if ( tp <= 50.0 && ws > 3.0) {
    let chillFactor = 35.74 + (0.6215 * tp) - (35.75 * Math.pow(ws,0.16)) + (0.4275 * tp * Math.pow(ws,0.16))
    document.querySelector("#windCh").innerHTML = Math.ceil(chillFactor) + "°F";
}
else {
    document.querySelector("#windCh").innerHTML = "N/A"
}


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