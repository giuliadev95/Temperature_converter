// Convert Celsius to Fahreneith Formula (0 °C × 9/5) + 32 = 32 °F

function convert() {

   var prompt = document.getElementById('celsius').value
   console.log(prompt); // input value in Celsius.
   console.log(typeof prompt); // In the first place, the input value is a 'text'= a string. 


   var conversion = parseFloat(prompt); // Secondly, the input value gets converted into a number;
   console.log(typeof conversion);
   var result = conversion * 9/5 + 32; // formula Celsius > Fahrenheit;
   console.log(result);

   var fahrenheitInput = document.getElementById('fahrenheit');
   fahrenheitInput.value = result.toFixed(1);  // display the result as an output in index.html.

}
