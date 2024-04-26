// Convert Celsius to Fahreneith Formula (0 °C × 9/5) + 32 = 32 °F

var celsiusField = document.getElementById('celsius'); // take the value that I insert in the Celsius input, from the HTML.

var celsiusValue = celsiusField.value;

console.log(typeof celsiusValue); // console.log(string)

var celsiusNum= parseInt(celsiusValue);

console.log(typeof celsiusNum); // console.log(number)

function toFahreneith (celsiusNum) { // function syntax 

    console.log((celsiusNum * 5/9) + 32);
}

toFahreneith(celsiusNum);

// Add event listener onclick for conversion btn