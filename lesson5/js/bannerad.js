// Only display bannerad on Friday.

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const dayName = daynames[d.getDay()];


function bannerad() {
    if (dayName!="Friday") {
        document.getElementsByClassName("newsbanner")
	[0].classList.toggle("newsbanneroff");
    }
}
