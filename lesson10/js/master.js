// **********  turn on the hamburger menu in small viewport  **********
function togglemenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// The footer must display the current date using JavaScript 
// in this format Wednesday, 24 July 2020

const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
document.getElementById("currentdate").textContent = fulldate;

// **********  Only make the bannerad visible on Friday  ****************

if (d.getDay() === 5) {
  document.getElementById("bannerad").style.display = "block";
}

// ---------------------------------------------------------------------

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";
// For units in fahrenheit, add "&units=imperial" to end of call. Or add "&units=metric" to get celsius.

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);


    document.getElementById('descr').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('windsp').textContent = jsObject.wind.speed.toFixed(0);
    // ---------------------------------------------------------------------
  //   Compute windChill 
//   Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
//   and wind speeds above 4.8 kilometres per hour (3.0 mph).

const startFunction = doInputOutput();   // call the function!!

function doInputOutput() {

  //	input
  var inTemp = parseFloat(document.getElementById("temp").textContent);
  var inWind = parseFloat(document.getElementById("windsp").textContent);

  if (inTemp <= 50 && inWind > 3) {

    windChill(inTemp, inWind);

    var windChillFactor = windChill(inTemp, inWind);

    //	round number to integer
    output = Math.round(windChillFactor);

    document.getElementById('windch').textContent = output;
  } 
  
  else {
    document.getElementById('windch').textContent = "N/A";
  }
}

function windChill(tempF, speed) {
  // processing to get WindChill factor
  // f is wind chill factor in Fahrenheit
  // t is air temperature in Fahrenheit
  // s is wind speed in mph at 5 feet above the ground

  var t = tempF;
  var s = speed;
  var f = (35.74 + 0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

  return f;

}
});

  // ------------------------ 5-day forecast -----------------------------------------
    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";

    fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
      // console.log(jsObject);
      const shortdaynames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
      var count = 1;
      for (var day of jsObject.list) {
        if (day.dt_txt.includes("18:00:00")) {
          var date = new Date(day.dt_txt);
          var dname = shortdaynames[date.getDay()];
            document.getElementById("day" + count).textContent = dname;
          var curtemp = day.main.temp;
            document.getElementById("temp" + count).textContent = curtemp.toFixed(0);
          const imagesrc = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
          const desc = day.weather[0].description;
            document.getElementById('icon' + count).setAttribute('src', imagesrc); 
            document.getElementById('icon' + count).setAttribute('alt', desc);
            count += 1;
            }
        }
        });
// -------------- date in this format: 11.22.2019 ----------------------------------------
      // const d = new Date(); 
      // const month = parseInt(d.getMonth() + 1);
      // const outdate = month + "." + d.getDate() + "." + d.getFullYear();
      // document.getElementById("currentdate").textContent = outdate;
// ------------------------------------------------------------------------

// get fonts
function getfonts() {
	WebFont.load({google: {families: ["Baloo Chettan","Raleway"]}});
}

// call the functions
function start() {
getfonts();
}
