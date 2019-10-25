// **********  turn on the hamburger menu in small viewport  **********
function togglemenu() {
	document.getElementsByClassName("navigation")
	[0].classList.toggle("responsive");
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
  function showbannerad() {
    if (d.getDay() === 5) {
        document.getElementById("bannerad").style.visibility = "visible";
    }
}
// ****************Start windChill****************************************
/* Defining Table
          Input: temperature & wind speed
          Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
          and wind speeds above 4.8 kilometres per hour (3.0 mph).
	 	 Processing: get input from the user
	 	 	call the  windChill function and enter values into that function
	 	 	compute wind chill
	 	 	return windChill
          Output:  display windchill in div from windChill function
          
	 */

	function doInputOutput() {

		//	input
		var inTemp = parseFloat(document.getElementById("temp").innerText);
		var inWind = parseFloat(document.getElementById("windsp").innerText);

        if (inTemp <= 50 && inWind > 3) {

		windChill(inTemp, inWind);

		var windChillFactor = windChill(inTemp, inWind);

		//	round number to two decimal plaaces
		// output = Math.round(100 * windChillFactor) / 100 ;
		output = Math.round(windChillFactor) ;

		document.getElementById('windch').innerHTML = output;
        }
       
        else {
		document.getElementById('windch').innerHTML = "N/A";
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
	// **************End windChill*********************************

function start(){
    showbannerad();
    doInputOutput();
}