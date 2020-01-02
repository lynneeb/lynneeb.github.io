const requestURL = 'https://lynneeb.github.io/lesson13/data/testdata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    
      for (let i = 0; i < temples.length; i++ ) {

          let templesec = document.createElement('section');
          let image = document.createElement('img');
          let templeh2 = document.createElement('h2');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let p4 = document.createElement('p');
          let p5 = document.createElement('p');
          let p6 = document.createElement('p');
          let p11 = document.createElement('p');

          let datadiv = document.createElement('div');

          image.setAttribute('src', "images/" + temples[i].photo);
          image.setAttribute('alt', temples[i].name);

          templeh2.textContent = temples[i].name;
          p1.textContent = "Location: " + temples[i].location;
          p2.textContent = "History: " + temples[i].history;
          p3.textContent = "Address: " + temples[i].address;
          p4.textContent = "Telephone: " + temples[i].telephone;
          p5.textContent = "Email: " + temples[i].email;
          p6.textContent = "Services: " + temples[i].services;
          p11.textContent = "Temple Closures: " + temples[i].templeClosures;

          datadiv.appendChild(image); 
          datadiv.appendChild(templeh2); 
          datadiv.appendChild(p1); 
          datadiv.appendChild(p2); 
          datadiv.appendChild(p3); 
          datadiv.appendChild(p4); 
          datadiv.appendChild(p5); 
          datadiv.appendChild(p6); 
          datadiv.appendChild(p11); 

          templesec.appendChild(datadiv); 

          document.querySelector('div.temples').appendChild(templesec);

// ------------------------------------------------------------------------------------------

fetch("https://api.openweathermap.org/data/2.5/weather?id=" + temples.weatherId + "&units=imperial&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a")
            .then((response) => response.json())
            .then((jsObject) => {
                console.log(jsObject);
                let weatherDiv = document.getElementById(temple.weatherDivId);
                let currentCondition = document.createElement("p");
                // let currentTemp = document.createElement("p");
                currentCondition.textContent = jsObject.main.temp.toFixed(0) + " °F " + jsObject.weather[0].description;
                // currentTemp.textContent = jsObject.main.temp.toFixed(0) + " °F";
                weatherDiv.appendChild(currentCondition);
                // weatherDiv.appendChild(currentTemp);
            });
// --------------------------------------------------------------------------------------------------


    }

  });

// **************** Home Page weather summary *********************************************************************

// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6539761&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";
// For units in fahrenheit, add "&units=imperial" to end of call. Or add "&units=metric" to get celsius.

// fetch(apiURL)
  // .then((response) => response.json())
  // .then((jsObject) => {
    // console.log(jsObject);


    // document.getElementById('descr').textContent = jsObject.weather[0].description;
    // document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    // document.getElementById('humid').textContent = jsObject.main.humidity;
    // document.getElementById('windsp').textContent = jsObject.wind.speed.toFixed(0);
    // ---------------------------------------------------------------------
  //   Compute windChill 
//   Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
//   and wind speeds above 4.8 kilometres per hour (3.0 mph).

// const startFunction = doInputOutput();   // call the function!!

// function doInputOutput() {

  //	input
  // var inTemp = parseFloat(document.getElementById("temp").textContent);
  // var inWind = parseFloat(document.getElementById("windsp").textContent);

  // if (inTemp <= 50 && inWind > 3) {

    // windChill(inTemp, inWind);

    // var windChillFactor = windChill(inTemp, inWind);

    //	round number to integer
    // output = Math.round(windChillFactor);

    // document.getElementById('windch').textContent = output;
  // } 
  
  // else {
    // document.getElementById('windch').textContent = "N/A";
  // }
// }

// function windChill(tempF, speed) {
  // processing to get WindChill factor
  // f is wind chill factor in Fahrenheit
  // t is air temperature in Fahrenheit
  // s is wind speed in mph at 5 feet above the ground

  // var t = tempF;
  // var s = speed;
  // var f = (35.74 + 0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

  // return f;

// }
// });
// **************** Temple 1 weather summary *********************************************************************

// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2353151&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";
// For units in fahrenheit, add "&units=imperial" to end of call. Or add "&units=metric" to get celsius.

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
    // console.log(jsObject);


    // document.getElementById('t1descr').textContent = jsObject.weather[0].description;
    // document.getElementById('t1temp').textContent = jsObject.main.temp.toFixed(0);
    // document.getElementById('t1humid').textContent = jsObject.main.humidity;
    // document.getElementById('t1windsp').textContent = jsObject.wind.speed.toFixed(0);
    // ---------------------------------------------------------------------
  //   Compute windChill 
//   Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
//   and wind speeds above 4.8 kilometres per hour (3.0 mph).

// const startFunction = doInputOutput();   // call the function!!

// function doInputOutput() {

  //	input
  // var inTemp = parseFloat(document.getElementById("t1temp").textContent);
  // var inWind = parseFloat(document.getElementById("t1windsp").textContent);

  // if (inTemp <= 50 && inWind > 3) {

  //   windChill(inTemp, inWind);

  //   var windChillFactor = windChill(inTemp, inWind);

    //	round number to integer
//     output = Math.round(windChillFactor);

//     document.getElementById('windch').textContent = output;
//   } 
  
//   else {
//     document.getElementById('windch').textContent = "N/A";
//   }
// }

// function windChill(tempF, speed) {
  // processing to get WindChill factor
  // f is wind chill factor in Fahrenheit
  // t is air temperature in Fahrenheit
  // s is wind speed in mph at 5 feet above the ground

//   var t = tempF;
//   var s = speed;
//   var f = (35.74 + 0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

//   return f;

// }
// });
// **************** Temple 2 weather summary *********************************************************************

// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2306104&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";
// For units in fahrenheit, add "&units=imperial" to end of call. Or add "&units=metric" to get celsius.

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
    // console.log(jsObject);


    // document.getElementById('t2descr').textContent = jsObject.weather[0].description;
    // document.getElementById('t2temp').textContent = jsObject.main.temp.toFixed(0);
    // document.getElementById('t2humid').textContent = jsObject.main.humidity;
    // document.getElementById('t2windsp').textContent = jsObject.wind.speed.toFixed(0);
    // ---------------------------------------------------------------------
  //   Compute windChill 
//   Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
//   and wind speeds above 4.8 kilometres per hour (3.0 mph).

// const startFunction = doInputOutput();   // call the function!!

// function doInputOutput() {

  //	input
  // var inTemp = parseFloat(document.getElementById("t2temp").textContent);
  // var inWind = parseFloat(document.getElementById("t2windsp").textContent);

  // if (inTemp <= 50 && inWind > 3) {

  //   windChill(inTemp, inWind);

  //   var windChillFactor = windChill(inTemp, inWind);

    //	round number to integer
//     output = Math.round(windChillFactor);

//     document.getElementById('windch').textContent = output;
//   } 
  
//   else {
//     document.getElementById('windch').textContent = "N/A";
//   }
// }

// function windChill(tempF, speed) {
  // processing to get WindChill factor
  // f is wind chill factor in Fahrenheit
  // t is air temperature in Fahrenheit
  // s is wind speed in mph at 5 feet above the ground

//   var t = tempF;
//   var s = speed;
//   var f = (35.74 + 0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

//   return f;

// }
// });
// **************** Temple 3 weather summary *********************************************************************

// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2078025&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";
// For units in fahrenheit, add "&units=imperial" to end of call. Or add "&units=metric" to get celsius.

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
    // console.log(jsObject);


    // document.getElementById('t3descr').textContent = jsObject.weather[0].description;
    // document.getElementById('t3temp').textContent = jsObject.main.temp.toFixed(0);
    // document.getElementById('t3humid').textContent = jsObject.main.humidity;
    // document.getElementById('t3windsp').textContent = jsObject.wind.speed.toFixed(0);
    // ---------------------------------------------------------------------
  //   Compute windChill 
//   Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
//   and wind speeds above 4.8 kilometres per hour (3.0 mph).

// const startFunction = doInputOutput();   // call the function!!

// function doInputOutput() {

  //	input
  // var inTemp = parseFloat(document.getElementById("t3temp").textContent);
  // var inWind = parseFloat(document.getElementById("t3windsp").textContent);

  // if (inTemp <= 50 && inWind > 3) {

  //   windChill(inTemp, inWind);

  //   var windChillFactor = windChill(inTemp, inWind);

    //	round number to integer
//     output = Math.round(windChillFactor);

//     document.getElementById('windch').textContent = output;
//   } 
  
//   else {
//     document.getElementById('windch').textContent = "N/A";
//   }
// }

// function windChill(tempF, speed) {
  // processing to get WindChill factor
  // f is wind chill factor in Fahrenheit
  // t is air temperature in Fahrenheit
  // s is wind speed in mph at 5 feet above the ground

//   var t = tempF;
//   var s = speed;
//   var f = (35.74 + 0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

//   return f;

// }
// });
// **************** Temple 4 weather summary *********************************************************************

// const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5454711&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";
// For units in fahrenheit, add "&units=imperial" to end of call. Or add "&units=metric" to get celsius.

// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
    // console.log(jsObject);


    // document.getElementById('t4descr').textContent = jsObject.weather[0].description;
    // document.getElementById('t4temp').textContent = jsObject.main.temp.toFixed(0);
    // document.getElementById('t4humid').textContent = jsObject.main.humidity;
    // document.getElementById('t4windsp').textContent = jsObject.wind.speed.toFixed(0);
    // ---------------------------------------------------------------------
  //   Compute windChill 
//   Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
//   and wind speeds above 4.8 kilometres per hour (3.0 mph).

// const startFunction = doInputOutput();   // call the function!!

// function doInputOutput() {

  //	input
  // var inTemp = parseFloat(document.getElementById("t4temp").textContent);
  // var inWind = parseFloat(document.getElementById("t4windsp").textContent);

  // if (inTemp <= 50 && inWind > 3) {

  //   windChill(inTemp, inWind);

  //   var windChillFactor = windChill(inTemp, inWind);

    //	round number to integer
//     output = Math.round(windChillFactor);

//     document.getElementById('windch').textContent = output;
//   } 
  
//   else {
//     document.getElementById('windch').textContent = "N/A";
//   }
// }

// function windChill(tempF, speed) {
  // processing to get WindChill factor
  // f is wind chill factor in Fahrenheit
  // t is air temperature in Fahrenheit
  // s is wind speed in mph at 5 feet above the ground

//   var t = tempF;
//   var s = speed;
//   var f = (35.74 + 0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

//   return f;

// }
// });
