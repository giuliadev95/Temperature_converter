// Convert Celsius to Fahreneith Formula (°C × 9/5) + 32

function convert() {   // open function.
   
   var prompt = document.getElementById('celsius').value
   var celsiusNum = parseFloat(prompt); // Secondly, the input value gets converted into a number.

   var result = celsiusNum * 9/5 + 32; // formula Celsius > Fahrenheit.
 
   var fahrenheitOutput = document.getElementById('fahrenheit'); // use the "fahrenheit" input field to display the result.
   fahrenheitOutput.value = result.toFixed(1);  // display the result in the 'Fahrenheit' input field.
   var fahrenheitNumericOutput = parseFloat(fahrenheitOutput.value);
   console.log(typeof fahrenheitNumericOutput);

   function bkgChange() {   // background color changer
      if(fahrenheitNumericOutput >= 77.0) {  // if more than 77° fahrenheit
         document.body.style.backgroundColor = "red";  // change the background color
      } else {
         document.body.style.backgroundColor = "white";
      }     
   }

   bkgChange();
   
}



// Convert Fahrenheit to Celsius Formula (°F - 32) × 5/9

function reverse(){    // open function.

var prompt = document.getElementById('fahrenheit-1').value;   // get the input value by id.

var fahrenheitNum = parseFloat(prompt);   // convert the value to string to number.

var result = (fahrenheitNum - 32) * 5/9 ;  // take the value of Fahrenheit degrees and apply to them the conversion formula.

var celsiusOutput = document.getElementById('celsius-1');    // use the "Celsius" input field to display the result.
celsiusOutput.value= result.toFixed(1);   // display the result in the 'Celisus' input field.
var celsiusNumericOutput = parseFloat(celsiusOutput.value);

// going on with the project
console.log(typeof celsiusNumericOutput);



}


