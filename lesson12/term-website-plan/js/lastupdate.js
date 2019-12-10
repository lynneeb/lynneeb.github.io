// **********  turn on the hamburger menu in small viewport  **********
function togglemenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
  }
// ------------------ current year ------------------------------
  
var currentyear = new Date().getFullYear();

document.getElementById('currentyear').textContent = currentyear;

// -------------------- last update ------------------------------------

var lastupdate = document.lastModified;

document.getElementById('lastupdate').textContent = lastupdate;

// get fonts
function getfonts() {
	WebFont.load({google: {families: ["Baloo Chettan","Raleway"]}});
}

// call the functions
function start() {
getfonts();
}