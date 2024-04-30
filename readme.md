# Temperature converter 
- This project is a basic temperature converter from Celsius to Fahrenheit degrees.

- This work is in progress: the converter must be implemented to function from Fahrenheit to Celsius either, and the design coded.


## Workflow
- I first focused on writing the JavaScript syntax, secondly I'll pass to the design part.

- Those are the steps I followed:
1) Take the string value the user writes down in the 'celsius' input field, and convert it to a number with the parseFloat() function.
2) Check the type of value through console.log(), to be sure we now have a number.
3) Perform the conversion from Celsius to Fahrenheit degrees.
4) Make the result appear in the 'Fahrenheit' input field. ( This field is set to "readonly", as it must not allow the user to write in it, but just to read the result it shows.)


### JavaScript I've learnt
- Convert the string value of the 'Temperature' input to a number using the parseFloat() function. This allows me to perform calculations with it and obtain the numeric value in Fahrenheit.


``` js snippet

var conversion = parseFloat(prompt); // The input content gets converted from a string into a number;
   console.log(typeof conversion); // Check if the type of the acutal value is now a number. The console returns: "number".

```

### HTML I've learnt
- Use the oninput attribute to call the ('convert') function with no need of an additional button that triggers it with an "onclick" attribute.

- Use the readonly attribute for the result input field.

- Replace type = "text" with type = "number" as the input main attribute, as it simplify the compiling for the user.


``` html 
<input type="number" id="celsius" placeholder="0" value="" oninput="convert()">
<input type="text" id="fahrenheit" placeholder="32" readonly>
```


