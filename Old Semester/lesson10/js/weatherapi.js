const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ee189add9d813bd1f5581c1b85f8e1d1&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const iconsoure = document.querySelector('#imagesrc');
    const weathersource = document.querySelector('#icon');

    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
  //iconsoure.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  // const = imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
 // const imagescr = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
 // const desc = jsObject.weather[0].description;  // note how we reference the weather array
