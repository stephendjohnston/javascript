const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let tArr = t.split('');

  for (let i = 0; i < s.length; i++) {        
      let idx = tArr.indexOf(s[i]);
      
      if (idx === -1) {
          return false
      }

      tArr.splice(idx, 1);
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true