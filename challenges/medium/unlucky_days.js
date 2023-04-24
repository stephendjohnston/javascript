"use strict";

/*
inputs: number
- year

outputs: number
- number of fridays in that year that fall on the 13th

Rules:
- assume that input will be greater than 1752
- return the number of fridays that fall on the 13th day of each month
of a given year

Mental Model:
Create a date object with the input year. Iterate from 0-11. On each iteration set the current month of
the date object to the current number in the iteration. then set the date to the 13th of every  month. Then 
get the day of the week, and if the day of the week is a friday, increment a counter. 

Algorithm:
- initialize count variable
- create for loop from 0-11
  - on each loop
    - setMonth(i)
    - setDate(13)
    - date.getDay()
    - if day === 5
      - increment count
- return count
*/

function fridayThe13ths(year) {
  let unluckyDays = 0;

  for (let i = 0; i < 12; i++) {
    let date = new Date(year, i, 13);
    if (date.getDay() === 5) unluckyDays++;
  }

  return unluckyDays;
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2