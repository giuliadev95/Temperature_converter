// Convert Celsius to Fahreneith Formula (0 °C × 9/5) + 32 = 32 °F

//var celsiusField = document.getElementById('celsius'); // take the value that I insert in the Celsius input, from the HTML.

//var celsiusValue = celsiusField.value;

//console.log(typeof celsiusValue); // console.log(string)

//var celsiusNum= parseFloat(celsiusValue);

//console.log(celsiusNum); // console.log(number)

function convert(){
   var prompt = document.getElementById('celsius').value
   console.log(prompt); // input value in Celsius.
   console.log(typeof prompt); // In the first place, the input value is a 'text'= a string. 


   var conversion = parseFloat(prompt); // Secondly, the input value gets converted into a number;
   console.log(typeof conversion);
   var result = conversion * 9/5 + 32; // formula Celsius > Fehrenheit;
   console.log(result);

   var fahrenheitInput = document.getElementById('fehrenheit');
   fahrenheitInput.value = result.toFixed(1);  // display the result as an output in index.html.



}




// Replace the standard value with the one the user writes.
// add a listener for the input? 


// Add event listener onclick for conversion btn