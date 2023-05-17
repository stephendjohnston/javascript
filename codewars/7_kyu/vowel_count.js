function getCount(str) {
  let count = 0;
  
  str.split('').forEach(char => {
    count += /[aeiou]/g.test(char) ? 1 : 0;
  });
  
  return count;
}

getCount("abracadabra"); // 5