		//   Compute windChill 
		//   Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
        //   and wind speeds above 4.8 kilometres per hour (3.0 mph).

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
