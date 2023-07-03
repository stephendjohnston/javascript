function romanToInt(s) {
  const numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];
    let nextChar = s[i+1];

    if (currChar === "I" && "VX".includes(nextChar)) {
      sum -= numeralValues[currChar];
    } else if (currChar === "X" && "LC".includes(nextChar)) {
      sum -= numeralValues[currChar];
    } else if (currChar === "C" && "DM".includes(nextChar)) {
      sum -= numeralValues[currChar];
    } else {
      sum += numeralValues[currChar];
    }
  }

  return sum;
}