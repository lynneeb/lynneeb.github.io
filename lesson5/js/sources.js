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


//code for banner ad
// if (d.getDay() === 5) {
//     document.getElementById("bannerad").hidden = false;
// }

//code for banner ad
// function togglebannerad() {
// 	if (d.getDay() !== 5) {
// 		document.getElementById("bannerad").hidden = true;
// 	}
// }

// function togglebannerad() {
// 	var x = document.getElementById('bannerad');
// 	if (d.getDay() == [5]) {
// 		x.style.display = 'none';
// 	}
// }

// function togglebannerad() {
// 	var x = document.getElementById('bannerad').innerHTML;
// 	if (d.getDay() == [5]) {
// 		x.style.display = 'none';
// 	}
// }


/* <script type="text/javascript"></script>
var day=d.getDay();
function togglebannerad() {
        if (day==5) { 
            $("#bannerad").css("display","block");

} */

// function showbannerad() {
// 	var d = new Date();
// 	var day = d.getDay();
// 		if (day==5) { 
// 			$("#bannerad").css("display","block");
// 		}
//   }


/* <script type="text/javascript">
var date=new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate(); // fixed

function SetDivContent() { */

    // if (year==2014 && month==00) { 
        // if (day>=3 && day<29) { 
            // $("#first").css("display","block");
        // }
//         else if (day==11 || day==12) { 
//             $("#second").css("display","block");
//         }
//         else if (day>12) { 
//             $("#third").css("display","block");
//         }
//     // }
//     else if (year==2014 && month>=0) { 
//             $("#third").css("display","block");
//         }
//     }
// </script>