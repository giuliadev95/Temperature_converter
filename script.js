// Convert Celsius to Fahreneith Formula (°C × 9/5) + 32

function convert() {   // open function.
   
   var prompt = document.getElementById('celsius').value
   console.log(prompt); // input value in Celsius.
   console.log(typeof prompt); // In the first place, the input value is a 'text'= a string. 


   var celsiusNum = parseFloat(prompt); // Secondly, the input value gets converted into a number.
   console.log(typeof celsiusNum);

   console.log(celsiusNum);
   var result = celsiusNum * 9/5 + 32; // formula Celsius > Fahrenheit.
   console.log(result);

   var fahrenheitOutput = document.getElementById('fahrenheit'); // use the "fahrenheit" input field to display the result.
   fahrenheitOutput.value = result.toFixed(1);  // display the result in the 'Fahrenheit' input field.
   
}



// Convert Fahrenheit to Celsius Formula (°F - 32) × 5/9

function reverse(){    // open function.

var prompt = document.getElementById('fahrenheit-1').value;   // get the input value by id.
console.log(typeof prompt);   // console.log the typeof the value.

var fahrenheitNum = parseFloat(prompt);   // convert the value to string to number.
console.log(typeof fahrenheitNum);   // console log typeof.

var result = (fahrenheitNum - 32) * 5/9 ;  // take the value of Fahrenheit degrees and apply to them the conversion formula.

var celsiusOutput = document.getElementById('celsius-1');    // use the "Celsius" input field to display the result.
celsiusOutput.value= result.toFixed(1);   // display the result in the 'Celisus' input field.

}

