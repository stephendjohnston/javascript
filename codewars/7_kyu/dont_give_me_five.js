function dontGiveMeFive(start, end) {
  let count = 0;
  
  while (start <= end) {
    if (containsFive(start)) {
      start++
      continue
    }
    
    count++
    start++
  }
  return count;
}

function containsFive(n) {
  return String(n).split('').includes('5');
}

console.log(dontGiveMeFive(1,9)); // 8
console.log(dontGiveMeFive(4,17)); // 12