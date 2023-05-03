function validParentheses(parenStr) {
  let count = 0;

  for (let i = 0; i < parenStr.length; i++ ) {
    let paren = parenStr[i];

    if (paren === "(") {
      count++;
    } else {
      count--;
    }

    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}

validParentheses("()");             // =>  true
validParentheses(")(()))")          // =>  false
validParentheses("(");              // =>  false
validParentheses("(())((()())())"); // =>  true