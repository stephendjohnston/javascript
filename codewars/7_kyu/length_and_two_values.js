function alternate(n, firstValue, secondValue){
  const result = [];

  for (let i = 0; i < n; i++ ) {
    if (i % 2 === 0) {
      result.push(firstValue);
    } else {
      result.push(secondValue);
    }
  }
  
  return result;
}

/*
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/