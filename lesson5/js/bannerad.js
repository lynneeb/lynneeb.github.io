// Only display bannerad on Friday.

// const daynames = [
// 	"Sunday",
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday"
// ];

// const dayName = daynames[d.getDay()];


// function bannerad() {
//     if (dayName!="Friday") {
//         document.getElementsByClassName("newsbanner")
// 	[0].classList.toggle("newsbanneroff");
//     }
// }


//code for banner ad
if (d.getDay() === 0, 1, 2, 3, 4, 5, 7) {
    document.getElementById("newsbanner").hidden = true;
}