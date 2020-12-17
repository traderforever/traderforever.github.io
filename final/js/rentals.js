


const requestURL = 'https://traderforever.github.io/final/data/rental.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let par1 = document.createElement('p');
            let par2 = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = rentals[i].vehicle ;
            par1.textContent = "Maximum Persons: " + rentals[i].maxperson;
            par2.textContent = "Reservation " + rentals[i].resHalfday;
            img.src = rentals[i].imageurl;
            img.alt = rentals[i].name;

            card.appendChild(h2);
            card.appendChild(par1);
            card.appendChild(par2);
            card.appendChild(img)

            document.querySelector('div.rentaltypes').appendChild(card);
        }
    });