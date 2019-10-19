// function showbannerad() {
// 	var d = new Date();
// 	var day = d.getDay();
// 		if (day==5) { 
// 			$("#bannerad").css("display","block");
// 		}
//   }


//   function showbannerad() {
//     	var x = document.getElementById('bannerad');
//     	if (d.getDay() == 5) {
//     		x.style.display = 'block';
//     	}
//     }


    // function showbannerad() {
    //     if (d.getDay() === 5) {
    //     document.getElementsByClassName("bannerad")[0].classList.toggle("showbannerad");
    //     }
    // }


    // function showbannerad() {
    //     var d = new Date();
    //     var n = d.getDay()
    //     document.getElementById("bannerad").innerHTML = n;
    //     if (n == 5) {
    //         n.style.display = 'block';
    //     }
    // }

function showbannerad() {
    if (d.getDay() === 5) {
        document.getElementById("bannerad").hidden = false;
    }
}