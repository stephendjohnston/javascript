// JS210 - Small Problems > Easy 4


// Cute Angles
// -----------
/*
Write a function that takes a floating point number representing an angle 
between 0 and 360 degrees, and returns a string representing that angle in 
degrees, minutes, and seconds. You should use a degree symbol (˚) to 
represent degrees, a single quote (') to represent minutes, and a double 
quote (") to represent seconds. There are 60 minutes in a degree, and 60 
seconds in a minute.

Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
*/

function dms(angle) {
  angle %= 360
  if (angle < 0) angle += 360;      // Further Exploration

  const degrees = parseInt(angle);
  const totalMinutes = (angle - degrees) * 60;
  const minutes = parseInt(totalMinutes);
  const totalSeconds = (totalMinutes - minutes) * 60;
  const seconds = parseInt(totalSeconds);

  console.log(`${degrees}\u00B0${padZeroes(minutes)}'${padZeroes(seconds)}"`);
  return `${degrees}\u00B0${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  numberString = String(number);

  if (numberString.length === 1) {
    numberString = '0' + numberString;
  }

  return numberString;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
// Further Exploration:
dms(-1);           // 359°00'00"
dms(400);          // 40°00'00"
dms(-40);          // 320°00'00"
dms(-420);         // 300°00'00"


// LS Solution:
// My answer has the magic numbers and should have a variable
// for the degree symbol...oops.

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}