function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let currDate = new Date();
let currDay = currDate.getDay();
let currYear = currDate.getFullYear();   



if (currDay == 5) {
    let pancake = document.getElementsByClassName("fridayBanner");

    for (let i = pancake.length - 1; i >= 0; i--) {
        pancake.item(i).style.display = "block";
    }
}

/* WEEK 9 JSON */
const townDataUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townDataUrl)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0 ; i < towns.length -1; i++) {
            if (i == 0) {
                continue;
            }
            else if (i == 2) {
                continue;
            }
            else if (i ==3) {
                continue;
            }

        let card = document.createElement('section');
        let townName = document.createElement('h2');
        let townMotto = document.createElement('div');
        let founded = document.createElement('p');
        let currPop = document.createElement('p');
        let avgRain = document.createElement('p');
        let image = document.createElement('img');

        townName.textContent = towns[i].name;
        townMotto.textContent = towns[i].motto;
        founded.textContent = "Year founded: " + towns[i].yearFounded;
        currPop.textContent = "Population: " + towns[i].currentPopulation;
        avgRain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', townName.textContent);

        card.appendChild(townName);
        card.appendChild(townMotto);
        card.appendChild(founded);
        card.appendChild(currPop);
        card.appendChild(avgRain);
        card.appendChild(image);

        document.querySelector('.wk9card').appendChild(card);
    }
});