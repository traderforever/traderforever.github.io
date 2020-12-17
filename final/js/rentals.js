


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
            card.appendChild(img);
            card.appendChild(par1);

            document.querySelector('div.rentaltypes').appendChild(card);
        }
    });

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++ ) {
            let card = document.createElement('tr');
            let th = document.createElement('th');
            let th1 = document.createElement('th');
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');
            // let thclass = document.createElement('th')


            th.textContent = rentals[i].vehicle ;
            th1.textContent = "Reservation " + rentals[i].resHalfday;
            th2.textContent = "Reservation " + rentals[i].resFullday;
            th3.textContent = "Walk-in " +  rentals[i].halfday;
            th4.textContent = "Walk-in " +  rentals[i].fullday;
            // thclass.className = 


            card.appendChild(th);
            card.appendChild(th1);
            card.appendChild(th2);
            card.appendChild(th3);
            card.appendChild(th4);


            document.querySelector('div.rentaltable').appendChild(card);
        }
    });