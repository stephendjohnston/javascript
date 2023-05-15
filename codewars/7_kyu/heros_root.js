/*

inputs: Integers (n, guess)
outputs: Integer

rules
- inputs are positive integers
- given 'e', an error -> set to 1 for this kata
- find the approximate square root of n
- we are given the first 'guess' as an input which will be x
- to get the next guess -> (x + n / x) / 2
- when the difference between x and the next guess is less than 'e'

Examples:
intRac(25, 1) // 4

first guess is 1 -> find next guess
second guess is (1 + 25/1) / 2 -> 13
third guess is (13 + 25/13) / 2 -> 7
fourth guess is (7 + 25/7) / 2 -> 5
fifth guess is (5 + 25/5) / 2 -> 5
5 - 5 is zero which is less than 'e' (1) --> so we are done

we only count the first 4 guesses

intRac(125348, 300) -> 3

1st guess: 300
2nd guess: (300 + 125348/300) / 2 -> 358
3rd guess: (358 + 125348/358) / 2 -> 354
4th guess: (354 + 125348/354) / 2 -> 354
354 - 453 === 0 which is less than 'e' so we are done

only count first 3 guesses

Mental model:
Take the input guess and use the formula to get the next guess. Check if the difference between
this guess and the previous guess is less than 'e'. If it is, then we have found the square root. If it is not,
increment a guess counter by 1 and continue the process until the square root has been found.

Algorithm:
- initialize guess counter variable set to 1
- intialize x = guess
- initialize while loop that will iterate while boolean true
  - to get the next guess, use (x + n/x) / 2 and use Math.floor
  - check if nextGuess - x is less than 'e' or 1 for this kata
    - break if true
  - if not true, increment guesses by 1
  - set x = nextGuess
- return number of guesses
*/

const intRac = (n, guess) => {
  let x = guess;
  let nextGuess = Math.floor((x + n / x) / 2);
  let guesses = 1;

  while (Math.abs(x - nextGuess) >= 1) {
    x = nextGuess;
    nextGuess =  Math.floor((x + n / x) / 2);
    guesses++;
  }

  return guesses;
}

console.log(intRac(25, 1)); // 4)
console.log(intRac(125348, 300)); // 3)
console.log(intRac(125348981764, 356243)); // 3