# Temperature converter 
- This project aims to be a basic Celsius to Fahrenheit temperature converter.
- I'm focusing on JavaScript syntax, as I've just learned how to write and use functions.
- This is a work in progress, I will continue to add and implement code.

## The JavaScript logic
- The first step I'm going through is console.log() the convertion from  Celsius to Fahrenheit, with a really simple formula from a given value.

## What I've learnt
- Convert the string value of the 'Temperature' input to a number using the parseFloat() function. This allows me to perform calculations with it and obtain the numeric value in Fahrenheit.


``` js snippet

var conversion = parseFloat(prompt); // The input content gets converted from a string into a number;
   console.log(typeof conversion); // Check if the type of the acutal value is now a number. The console returns: "number".

```

- Use the oninput attribute to call the ('convert') function with no need of an additional button that triggers it with an "onclick" attribute.


``` html 
<input type="number" id="celsius" placeholder="0" value="" oninput="convert()">
```


- Replace type = "text" with type = "number" as the input main attribute, as it simplify the compiling for the user.

