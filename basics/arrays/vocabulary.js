let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(arr => {
  arr.forEach(word => console.log(word));
});

// OR

vocabulary.flat().forEach(word => console.log(word));

// Expected output:
// happy
// cheerful
// merry
// etc...