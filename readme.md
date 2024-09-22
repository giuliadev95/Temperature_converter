# Temperature converter 
- This project is a basic temperature converter organized in two cards, one to convert from Celsius to Fahrenheit degrees, and the other for the opposite.

- My goal is to implement this design by reducing the cards to one able to perform both conversions.

- See the [project live](https://temperaturejsconverter.netlify.app/).


## Workflow
1) In the index.html I coded beginner form with a "Celsius" label and a void input field with the attribute "type: number".
2) I added a "Convert" button, and an input with the attribute "readonly" to host the result.
3) I then worked on the sctipt.js, and wrote the functions, using the consol.log() to check everytime if the conversion from string to number was successfull and to test other steps.
4) I removed the console.log() once the project was finished.
5) I replicated the html structure and the JavaScript logic in a second card hosting the reverse conversion from Fahrenheit to Celsius.
6) When I was okay with the result, I worked on the styling using the grid layout, a font-style from Google Fonts, and a colour palette.

## Functions and properties I learnt
### JavaScript 
- parceFloat(): converts a string to a number.
- oninput
- .toFixed(1): returns a number with up to one decimal.


### HTML 
- Use the oninput attribute to call the ('convert') function with no need of an additional button that triggers it with an "onclick" attribute.

- Use the readonly attribute for the result input field.

- Replace type = "text" with type = "number" as the input main attribute, as it simplify the compiling for the user.


``` html 
<input type="number" id="celsius" placeholder="0" value="" oninput="convert()">
<input type="text" id="fahrenheit" placeholder="32" readonly>
```


### CSS


## List of implementations:
Before! :
1) write a better logic
2) implement the background changer 
3) add the formulas for both convertions

// After all of that, then i can work on:
4) work with the sound
5) add the forecast


