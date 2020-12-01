const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let currDate = new Date();
let currDay = currDate.getDay();
let currYear = currDate.getFullYear();   

let lastUpdate = new Date(document.lastModified);
let day = days[lastUpdate.getDay()];
let date = lastUpdate.getDate();
let month = months[lastUpdate.getMonth()];
let year = lastUpdate.getFullYear();         
let lastUpdatedTxt = day + ", " + date + " " + month + " " + year;

document.getElementById('currYear').textContent = currYear;
document.getElementById('lastUpdated').innerHTML = lastUpdatedTxt;

// pancake message
if (currDay == 5) {
    document.getElementById("notice").style.display = "block";
}
