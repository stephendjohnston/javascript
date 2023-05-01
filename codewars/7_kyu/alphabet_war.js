const alphabetWar = (str) => {
  let leftSideLetters = 'sbpw';
  let leftSideScore = 0;
  let rightSideLetters = 'zdqm';
  let rightSideScore = 0;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    console.log(currentChar)
    if (leftSideLetters.includes(currentChar)) {
      leftSideScore += leftSideLetters.indexOf(currentChar) + 1;
    } else if (rightSideLetters.includes(currentChar)) {
      rightSideScore += rightSideLetters.indexOf(currentChar) + 1;
    }
  }

  if (leftSideScore > rightSideScore) {
    return 'Left side wins!';
  } else if (rightSideScore > leftSideScore) {
    return 'Right side wins!';
  }
  
  return 'Let\'s fight again!';
}

console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!
console.log(alphabetWar("mm"));       //=> Right side wins!
console.log(alphabetWar("hmippz"));