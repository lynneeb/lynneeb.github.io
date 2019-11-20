const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
  
// const f = (((jsObject.main.temp - 273.15) * 9) / 5) + 32;
// var temp = f.toFixed(2);

//  Formula to convert Kelvin to Fahrenheit (K − 273.15) × 9/5 + 32 = °F
  const description = jsObject.weather[0].description;  // note how we reference the weather array
  const temp = jsObject.main.temp.imperial;  // note how we reference the weather array
  const humidity = jsObject.main.humidity;  // note how we reference the weather array
  const speed = jsObject.wind.speed.imperial;  // note how we reference the weather array

  var temp = f.toFixed(2);

  document.getElementById('descr').textContent = description;
  document.getElementById('current-temp').textContent = temp;
  document.getElementById('humid').textContent = humidity;
  document.getElementById('windsp').textContent = speed;
  
  // document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
  // document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
  // document.getElementById('icon').setAttribute('alt', desc);
});