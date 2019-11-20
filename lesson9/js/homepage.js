const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    // console.table(jsonObject);  
    // temporary checking for valid response and data parsing

    // JSON data needed - motto, year founded, population, and annual rainfall
      for (let i = 0; i < towns.length; i++ ) {

        // if (i == 1 || i == 4 || i == 5) {
          if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
          let townsec = document.createElement('section');
          let h2 = document.createElement('h2');
          let h3 = document.createElement('h3');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let datadiv = document.createElement('div');
          let image = document.createElement('img');

          h2.textContent = towns[i].name;
          h3.textContent = towns[i].motto;
          p1.textContent = "Year Founded: " + towns[i].yearFounded;
          p2.textContent = "Population: " + towns[i].currentPopulation;
          p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

          image.setAttribute('src', "images/" + towns[i].photo);
          image.setAttribute('alt', towns[i].name);

          datadiv.appendChild(h2); 
          datadiv.appendChild(h3); 
          datadiv.appendChild(p1); 
          datadiv.appendChild(p2); 
          datadiv.appendChild(p3); 
          townsec.appendChild(datadiv); 
          townsec.appendChild(image); 

          document.querySelector('div.townsites').appendChild(townsec);
        }
    }

  });

  