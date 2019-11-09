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

// function showbannerad() {
//     if (d.getDay() === 5) {
//         document.getElementById("bannerad").style.display = "block";
//     }
// }

// storm severity
function adjustRating(rating) {
	var rating = parseInt(document.getElementById("ratingvalue").innerHTML);
	document.getElementById("ratingvalue").innerHTML = rating;
}


// get fonts
function getfonts() {
	WebFont.load({google: {families: ["Baloo Chettan","Raleway"]}});
}


// call the functions
function start() {
    // showbannerad();
	// doInputOutput();
	adjustRating(rating);
	getfonts();
}