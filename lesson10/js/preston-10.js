const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
  
const f = (((jsObject.main.temp - 273.15) * 9) / 5) + 32;
var temp = f.toFixed(2);

//  Formula to convert Kelvin to Fahrenheit (K − 273.15) × 9/5 + 32 = °F
  document.getElementById('current-temp').textContent = temp;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
  const desc = jsObject.weather[0].description;  // note how we reference the weather array
  
  document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
});