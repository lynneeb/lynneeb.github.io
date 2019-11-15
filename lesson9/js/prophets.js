const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];

    console.table(jsonObject);  // temporary checking for valid response and data parsing

    for (let i = 0; i < prophets.length; i++ ) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let image = document.createElement('img');
        let prnumber = (+ [i] + + 1);  
        // the + forces the number following it to be an integer instead of a string

         h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
         h3.textContent = "Date of Birth: " + prophets[i].birthdate;
         p.textContent = "Place of Birth: " + prophets[i].birthplace;
         image.setAttribute('src', prophets[i].imageurl);
         image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prnumber);

         card.appendChild(h2); 
         card.appendChild(h3); 
         card.appendChild(p); 
         card.appendChild(image); 

        document.querySelector('div.cards').appendChild(card);
    }

  });

  