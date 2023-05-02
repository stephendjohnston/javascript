const alphabetWar = (str) => {
  let leftSideLetters = 'sbpw';
  let leftSideScore = 0;
  let rightSideLetters = 'zdqm';
  let rightSideScore = 0;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];

    if (leftSideLetters.includes(currentChar)) {
      leftSideScore += leftSideLetters.indexOf(currentChar) + 1;
    } else if (rightSideLetters.includes(currentChar)) {
      rightSideScore += rightSideLetters.indexOf(currentChar) + 1;
    }
  }

  return leftSideScore === rightSideScore ? "Let's fight again!" : (leftSideScore > rightSideScore ? "Left" : "Right") + " side wins!";
}

console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!
console.log(alphabetWar("mm"));       //=> Right side wins!
console.log(alphabetWar("hmippz"));   //=> Left side wins!