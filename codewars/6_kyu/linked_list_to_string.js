"use strict";

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list) {
  if (list === null) return 'null';

  let string = '';

  while (list.next !== null) {
    string += String(list.data) + ' -> ';
    list = list.next;
  }
 
  return string + list.data + ' -> null';
}

// with Recursion

function stringify(list) {
  return list === null ? 'null' : `${list.data} -> ${stringify(list.next)}`;
}

console.log(stringify(new Node(1, new Node(2, new Node(3))))); // "1 -> 2 -> 3 -> null"
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))); // "0 -> 1 -> 4 -> 9 -> 16 -> null"
console.log(stringify(null)); // "null"