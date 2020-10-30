let tp = parseFloat(document.querySelector(".tempF").innerHTML)
let ws = parseFloat(document.querySelector(".windSp").innerHTML)
if ( tp <= 50.0 && ws > 3.0) {
    let chillFactor = 35.74 + (0.6215 * tp) - (35.75 * Math.pow(ws,0.16)) + (0.4275 * tp * Math.pow(ws,0.16))
    document.querySelector("#chill").innerHTML = Math.ceil(chillFactor)
}
else {
    document.querySelector("#chill").innerHTML = "N/A"
}