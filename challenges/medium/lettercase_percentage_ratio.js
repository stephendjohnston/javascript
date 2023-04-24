"use strict";

/*
inputs: string
output: object

Rules:
- input will be a string
- input may contain any char
- output is an object with three properties
- keys will be: lowercase, uppercase, neither
- values will be Strings that contain the percentage that each property
represents of the input string
- the values will have two decimal points

Example:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

- 5 lowercase chars
  - 5 chars / total chars = 5/10 = .5 * 100 = 50.00
- 1 uppercase char
- 4 that are neither

Data Structure:
- String -> Object
- Array of chars
- Number percentage that will be converted to string

Mental Modal:
create an object that will have three properties. Iterate over an array of chars and for each
char determine its categorization. If the lowercase, increase the count of lowercase property value by 1 etc.
Next, iterate over the values of the object and divide each number by 10 and multiply by 100 to get the
percentage. Make sure the number has two decimals, then convert to String. 
Return object.

- initialize object with three properties and values set to 0
- split input string into array of chars
- iterate over array of chars
  - conditional to check char
  - if lowercase -> increase lowercase property value by 1
  - **same for other two conditions
- use for of loop to iterate over object properties
  - divide prop value by 10 and multiply by 100
  - use toFixed method to round to two decimals -> method returns a string
  - set prop value to this new String number
- return object
*/

function letterPercentages(string) {
  const percentages = {lowercase: 0, uppercase: 0, neither: 0};
  let numberOfChars = string.length;

  string.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      percentages.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      percentages.uppercase += 1;
    } else {
      percentages.neither += 1;
    }
  });

  for (let prop in percentages) {
    let percentage = Number.parseFloat((percentages[prop] / numberOfChars) * 100);
    percentages[prop] = percentage.toFixed(2);
  }

  console.log(percentages);
  return percentages;
}

// OR

function letterPercentages(string) {
  function charCount(regex) {
    let chars = string.match(regex) || [];
    return chars.length;
  }

  return {
    lowercase: (charCount(/[a-z]/g) / string.length * 100).toFixed(2),
    uppercase: (charCount(/[A-Z]/g) / string.length * 100).toFixed(2),
    neither: (charCount(/[^a-z]/ig) / string.length * 100).toFixed(2)
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }