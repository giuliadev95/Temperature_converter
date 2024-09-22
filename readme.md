# Temperature converter 
- This project is a basic temperature converter organized in two cards, one to convert from Celsius to Fahrenheit degrees, and the other for the opposite conversion.

- See the [project live](https://temperaturejsconverter.netlify.app/).


## Workflow
1) In the index.html I coded beginner form with a "Celsius" label and a void input field with the attribute "type: number".
2) I added a "Convert" button, and an input with the attribute "readonly" to host the result.
3) I then worked on the script.js, and wrote the functions, using the consol.log() to check everytime if the conversion from string to number was successfull and to test other steps.
4) I removed the console.log() once the project was finished.
5) I replicated the html structure and the JavaScript logic in a second card hosting the reverse conversion from Fahrenheit to Celsius.
6) Once I'm okay with the result, I have to work on the styling.

## Functions and properties I learnt
### JavaScript 
- parceFloat(): converts a string to a number.
- oninput
- .toFixed(1): returns a number with up to one decimal.


### HTML 
- Use the oninput attribute to call the ('convert') function with no need of an additional button that triggers it with an "onclick" attribute.

- Use the readonly attribute for the result input field.

- Replace type = "text" with type = "number" as the input main attribute to simplify the compiling for the user.


``` html 
<input type="number" id="celsius" placeholder="0" value="" oninput="convert()">
<input type="text" id="fahrenheit" placeholder="32" readonly>
```

## List of implementations:
1) add the formulas for both convertions
2) Add a background changer 
3) Add sounds



