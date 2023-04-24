// JS210 - Small Problems > Easy 4


// Cute Angles
// -----------

// PEDAC
// -----
/*
Problem:
--------
Take an array and create an object that will count the number of occurrences
of each element in the array, then output each key/value pair of the object
to the screen.

Rules:
  Explicit
    - log each element and the number of occurrences to the screen
    - input will be an array
  Implicit
    - array will contain string elements
    - array will not be empty

Algorithm:
----------

- declare and initialize a object variable to hold the property names and values
- iterate over the input array
  - if the current element does not exist in the object, set the that element
  as the property name and set it's value to 0
- at the end of the loop, add 1 to the value of the current element property name value
- iterate over the object and on every iteration, log the property name and
value to the console
*/

function countOccurrences(vehicleList) {
  const count = {};

  for (let i = 0; i < vehicleList.length; i += 1) {
    if (count[vehicleList[i]] === undefined) {
      count[vehicleList[i]] = 0;
    }

    count[vehicleList[i]] += 1;
  }

  const vehicleTypes = Object.keys(count);

  for (let i = 0; i < vehicleTypes.length; i += 1) {
    console.log(vehicleTypes[i] + ' => ' + String(count[vehicleTypes[i]]));
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// LS Solution:

function countOccurrences(elements) {
  const occurrences = {};

  for (let i = 0; i < elements.length; i += 1) {
    occurrences[elements[i]] = occurrences[elements[i]] || 0;
    occurrences[elements[i]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(`${item} => ${String(occurrences[item])}`);
  }
}