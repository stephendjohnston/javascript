"use strict";

var fireAndFury = function(tweet) {
  let fire_fury = tweet.match(/FIRE|FURY/g);
  if (!fire_fury || tweet.match(/[^FIREYU]/g)) return 'Fake tweet.';

  let arrayOfArrays = [];
  let current = [];
  current.push(fire_fury.shift());

  fire_fury.forEach(val => {
    if (current[current.length - 1] !== val) {
      arrayOfArrays.push(current);
      current = [];
    }

    current.push(val);
  });

  arrayOfArrays.push(current);

  return arrayOfArrays.map(arr => {
    if (arr.includes('FIRE')) {
      return 'You ' + 'and you '.repeat(arr.length - 1) + 'are fired!';
    } else {
      return 'I am ' + 'really '.repeat(arr.length - 1) + 'furious.';
    }
  }).join(' ');
}


console.log(fireAndFury("FURYYYFIREYYFIRE")); // "I am furious. You and you are fired!"
console.log(fireAndFury("FIREYYFURYYFURYYFURRYFIRE")); // "You are fired! I am really furious. You are fired!"
console.log(fireAndFury("FYRYFIRUFIRUFURE")); // "Fake tweet."
console.log(fireAndFury("FIRERFURRYG")); // "Fake tweet" contains a 'G'