"use strict";

/*
inputs: String
outputs: String

There are 12 major scales each of which starts from a differnt one of the twelve musical 
notes.

- The twelve musical notes are, in ascending order:

C, C#, D, D#, E, F, F#, G, G#, A, A#, B

A major scale has seven unique notes and follows a specific intervalic pattern.

- the ascending C major scale with notes C,D,E,F,G,A and B follows this pattern:

Notes       C - D - E - F - G - A - B - C
Distance      2   2   1   2   2   2   1

The same pattern (2-2-1-2-2-2-1) occurs in every major scale.

create a function that takes a melody as a string and if the melody uses all the seven 
notes of a major scale, but no other notes, returns a string:

"? major scale"

Where ? is the starting note of the scale (or the "key center")

For instance, the input melody "C#D#FF#D#FF#G#A#C" returns "C# major scale".



Rules:
- A major scale has 7 UNIQUE notes
- a major scale follows this pattern: (2-2-1-2-2-2-1)
- A melody doesn't always start on the first note of a scale.
- Any input that contains any other characters other than the 12 Musical notes
and # is considered invalid and should return "no major scale"
  - this includes lowercase chars of the 12 notes
- two # in a row is invalid
- if a melody misses one note it is invalid

Examples:

- The twelve musical notes are, in ascending order:

C, C#, D, D#, E, F, F#, G, G#, A, A#, B
(2-2-1-2-2-2-1)

var test_1 = "CBCACGCFCECDC";
var sol_1  = "C major scale";

- Has extra C chars but if you take out all of them except that last one and
check all the notes from right to left, it follows the C major scale

var test_2 = "D#C#BAG#E";
var sol_2  = "No major scale";

- only has 6 notes

var test_3 = "F#D#A#BC#D#BD#EBG#A#B";
var sol_3  = "B major scale";



*/

function majorScale(melody) {

  return "? major scale";
}

var test_1 = "CBCACGCFCECDC";
var sol_1  = "C major scale";
var test_2 = "D#C#BAG#E";
var sol_2  = "No major scale";
var test_3 = "F#D#A#BC#D#BD#EBG#A#B";
var sol_3  = "B major scale";
var test_4 = "CD#C#FD#GFG#GA#";
var sol_4  = "G# major scale";

console.log(majorScale(test_1))// === sol_1;
console.log(majorScale(test_2))// === sol_2;
console.log(majorScale(test_3))// === sol_3;
console.log(majorScale(test_4))// === sol_4;