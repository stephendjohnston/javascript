let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
'Marrakesh', 'New York City'];

function contains(location, destinations) {
  return destinations.some(destination => destination === location);
}

// OR

function contains(location, destinations) {
  return destinations.indexOf(location) >= 0;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false