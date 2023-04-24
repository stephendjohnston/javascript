let string = 'launch school tech & talk';

function capitalize(word) {
  return word.split('')[0].toUpperCase() + word.slice(1);
}

let result = string.split(' ').map(capitalize).join(' ');

console.log(result);
// "Launch School Tech & Talk"