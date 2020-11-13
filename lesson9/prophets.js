const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';




 
  fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let header2 = document.createElement('h2');
            let image = document.createElement('img');
            let dayBirth = document.createElement('p');
            let cityBirth = document.createElement('p');

            header2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            dayBirth.textContent = "Date of Birth: " + prophets[i].birthdate;
            cityBirth.textContent = "Place of Birth: " + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', (prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order));

            card.appendChild(header2);
            card.appendChild(image);
            card.appendChild(dayBirth);
            card.appendChild(cityBirth);

            card.setAttribute("class", "card")
            document.querySelector('div.cards').appendChild(card);
        }

        
    });