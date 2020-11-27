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
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        const myTowns = towns.filter(town => (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"));
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
            h3.textContent = myTowns[i].name;
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


        document.querySelector('.wk9card').appendChild(card);
    }
});