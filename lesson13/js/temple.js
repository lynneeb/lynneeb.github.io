const requestURL = 'https://lynneeb.github.io/lesson13/data/templedata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    // const ordinances = jsonObject['temples'['ordinanceSchedule']];
    // const ordinances = jsonObject['temples.ordinanceSchedule'];
    // const ordinances = temples.ordinanceSchedule;
    // const baptism = temples.ordinanceSchedule.baptism;

    // console.table(jsonObject);  
    // temporary checking for valid response and data parsing

    // JSON data needed - 
      for (let i = 0; i < temples.length; i++ ) {

          // if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
          
          let templesec = document.createElement('section');
            
          let image = document.createElement('img');
          // let image1 = document.createElement('img');
          // let image2 = document.createElement('img');
          // let image3 = document.createElement('img');
          // let image4 = document.createElement('img');
          // let templesec = document.createElement('section');
          // let templesec1 = document.createElement('section');
          // let templesec2 = document.createElement('section');
          // let templesec3 = document.createElement('section');
          // let templesec4 = document.createElement('section');
          let templeh2 = document.createElement('h2');
          let p1 = document.createElement('p');
          let p2 = document.createElement('p');
          let p3 = document.createElement('p');
          let p4 = document.createElement('p');
          let p5 = document.createElement('p');
          let p6 = document.createElement('p');
          // let p7 = document.createElement('p');
          // let p8 = document.createElement('p');
          // let p9 = document.createElement('p');
          // let p10 = document.createElement('p');
          let p11 = document.createElement('p');
          // let list1 = document.createElement('ul');
          // let list2 = document.createElement('ul');
          // let list3 = document.createElement('ul');
          // let list4 = document.createElement('ul');
          // let list5 = document.createElement('ul');
          // let list6 = document.createElement('ul');
          // let list7 = document.createElement('ul');
          // let list8 = document.createElement('ul');

          // var list = document.createElement('ul');

          let datadiv = document.createElement('div');
          // let datadiv1 = document.createElement('div');
          // let datadiv2 = document.createElement('div');
          // let datadiv3 = document.createElement('div');
          // let datadiv4 = document.createElement('div');

          image.setAttribute('src', "images/" + temples[i].photo);
          image.setAttribute('alt', temples[i].name);

          // image1.setAttribute('src', "images/" + temples[i].photo);
          // image1.setAttribute('alt', temples[i].name);

          // image2.setAttribute('src', "images/" + temples[i].photo);
          // image2.setAttribute('alt', temples[i].name);

          // image3.setAttribute('src', "images/" + temples[i].photo);
          // image3.setAttribute('alt', temples[i].name);

          // image4.setAttribute('src', "images/" + temples[i].photo);
          // image4.setAttribute('alt', temples[i].name);

          templeh2.textContent = temples[i].name;
          p1.textContent = "Location: " + temples[i].location;
          p2.textContent = "History: " + temples[i].history;
          p3.textContent = "Address: " + temples[i].address;
            // for (var address of temples.address) {
            //   let item = document.createElement('li');
            //   item.textContent = address;
            //   list1.appendChild(item);
            //   }

          p4.textContent = "Telephone: " + temples[i].telephone;
          p5.textContent = "Email: " + temples[i].email;
          p6.textContent = "Services: " + temples[i].services;
            // for (var services of temples.services) {
            //   let item2 = document.createElement('li');
            //   item2.textContent = services;
            //   list2.appendChild(item2);
            //   }
            // for (let i = 0; i < ordinances; i++ ) {
            // let ordinances = jsonObject['temples.ordinanceSchedule'];
              // for (let i = 0; i < ordinanceSchedule.length; i++ ) {
            // p7.textContent = "Ordinance Schedule: " + "Baptism" + temples[i].ordinanceSchedule;
            // p8.textContent = "Initiatory" + temples[i].ordinanceSchedule;
            // p9.textContent = "Endowment" + temples[i].ordinanceSchedule;
            // p10.textContent = "Sealing" + temples[i].ordinanceSchedule;

          // p7.textContent = "Ordinance Schedule: " + temples[i].ordinanceSchedule;
          // p7.textContent = "Ordinance Schedule: " + "Baptism" + ordinances[i].baptism;
          // p7.textContent = "Ordinance Schedule: " + "Baptism" + temples[i].ordinanceSchedule[0];
          // p8.textContent = "Initiatory" + ordinanceSchedule[i].initiatory;
          // p9.textContent = "Endowment" + ordinanceSchedule[i].endowment;
          // p10.textContent = "Sealing" + ordinanceSchedule[i].sealing;
              // }
            // }
            // for (var ordinances of temples.ordinanceSchedule) {
            //   let item3 = document.createElement('li');
            //   item3.textContent = ordinances;
            //   list3.appendChild(item3);
            // }
            // const baptism = temples.ordinanceSchedule.baptism;
            // for (let i = 0; i < ordinances; i++ ) {

              //   for (var baptism of temples.ordinanceSchedule.baptism) {
              //   let item4 = document.createElement('li');
              //   item4.textContent = baptism;
              //   list4.appendChild(item4);
              // }
              
              // for (var initiatory of temples.ordinanceSchedule.initiatory) {
              //   let item5 = document.createElement('li');
              //   item5.textContent = initiatory;
              //   list5.appendChild(item5);
              // }
              
              // for (var endowment of temples.ordinanceSchedule.endowment) {
              //   let item6 = document.createElement('li');
              //   item6.textContent = endowment;
              //   list6.appendChild(item6);
              // }
              
              // for (var sealing of temples.ordinanceSchedule.sealing) {
              //   let item7 = document.createElement('li');
              //   item7.textContent = sealing;
              //   list7.appendChild(item7);
              // }
              p11.textContent = "Temple Closures: " + temples[i].templeClosures;

            // for (var closures of temples.templeClosures) {
            //   let item8 = document.createElement('li');
            //   item8.textContent = closures;
            //   list8.appendChild(item8);
            // }

           

              // document.querySelector('div.addresslist').appendChild(list1);
              // document.querySelector('div.serviceslist').appendChild(list2);
              // document.querySelector('div.ordinanceslist').appendChild(list3);
              // document.querySelector('div.baptistrylist').appendChild(list4);
              // document.querySelector('div.initiatorylist').appendChild(list5);
              // document.querySelector('div.endowmentlist').appendChild(list6);
              // document.querySelector('div.sealinglist').appendChild(list7);
              // document.querySelector('div.closurelist').appendChild(list8);

          // image.setAttribute('src', "images/" + temples[i].photo);
          // image.setAttribute('alt', temples[i].name);

          datadiv.appendChild(image); 
          // templesec.appendChild(image); 

          datadiv.appendChild(templeh2); 
          datadiv.appendChild(p1); 
          datadiv.appendChild(p2); 
          datadiv.appendChild(p3); 
          datadiv.appendChild(p4); 
          datadiv.appendChild(p5); 
          datadiv.appendChild(p6); 
          // datadiv.appendChild(p7); 
          // datadiv.appendChild(p8); 
          // datadiv.appendChild(p9); 
          // datadiv.appendChild(p10); 
          // datadiv.appendChild(list1); 
          // datadiv.appendChild(list2); 
          // datadiv.appendChild(list3); 
          // datadiv.appendChild(list4); 
          // datadiv.appendChild(list5); 
          // datadiv.appendChild(list6); 
          // datadiv.appendChild(list7); 
          datadiv.appendChild(p11); 

          // datadiv.appendChild(list8); 
          templesec.appendChild(datadiv); 
          // templesec1.appendChild(datadiv1); 
          // templesec2.appendChild(datadiv2); 
          // templesec3.appendChild(datadiv3); 
          // templesec4.appendChild(datadiv4); 
          // templesec1.appendChild(image1); 
          // templesec2.appendChild(image2); 
          // templesec3.appendChild(image3); 
          // templesec4.appendChild(image4); 

          document.querySelector('div.temples').appendChild(templesec);
          // document.querySelector('div.temple1').appendChild(templesec1);
          // document.querySelector('div.temple2').appendChild(templesec2);
          // document.querySelector('div.temple3').appendChild(templesec3);
          // document.querySelector('div.temple4').appendChild(templesec4);

    }
  // }

  });

// **************** Home Page weather summary *********************************************************************

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=6539761&APPID=ae2b7c6a473ad9e5e160e7e6af08fc2a&units=imperial";
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
