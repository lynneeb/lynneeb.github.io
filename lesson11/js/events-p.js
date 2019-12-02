  fetch('https://byui-cit230.github.io/weather/data/towndata.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);
    const towns = jsonObject['towns'];
    var town = towns.find(town => town.name === "Preston");
    var list = document.createElement('ul');
    for (var event of town.events) {
    let item = document.createElement('li');
    item.textContent = event;
    list.appendChild(item);
    }

    document.querySelector('div.eventlist').appendChild(list);

  });