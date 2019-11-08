// The footer must display the current date using JavaScript 
// in this format 11.5.2019


const d = new Date(); 
const month = parseInt(d.getMonth() + 1);
const outdate = month + "." + d.getDate() + "." + d.getFullYear();
document.getElementById("currentdate").textContent = outdate;


// WebFont.load({google: {families: ["Ubuntu"]}});
