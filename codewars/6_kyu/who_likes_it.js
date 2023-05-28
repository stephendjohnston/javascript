/*
Who Likes It?
-------------

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

inputs: array of strings
output: string

Rules:
- input is an array of names of people
- if the array is empty, return a string --> 'no one likes this'
- if the array has one name, return '${name} likes this'
- if the array has more than one but less then 4 names, return the names of all the people
- if the array has more than 3 people, return 2 names and then an integer representing the number of other people
- 

Mental Model:
Determine the number of people in the array and then return a string based on that. There are 5 different possible string combinations:

empty array --> 'no one likes this'
1 name --> '${name} likes this'
2 names --> '${name} and ${name} like this'
3 names --> '${name}, ${name} and ${name} like this'
4 or more names --> '${name}, ${name} and ${array.length - 2} others like this'
*/

function likes(names) {
  const outputs = {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names.join(' and ')} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`
  }

  return outputs[names.length] || `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

console.log(likes([])); // 'no one likes this'
console.log(likes(['Peter'])); // 'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'