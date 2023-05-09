// Composing Squared Strings

// ---------------- PEDAC ---------------

/*
inputs: 2 strings
outputs: 1 string

Rules:
- input strings are of equal length (n)
- input strings are split into equal parts by newlines
- output string will be the same length as input strings + 1
- return a string that is a composite of the 2 input strings following these rules. 
  - for str1, you take the first letter of the first section and for str2, you take the letters of the last section
  - for each section, you increment the number of letters of str1 that you take and for str2, you chop off
  the characters 1 at a time.
  -

Examples:
str1 = "byGt\nhTts\nRTFF\nCnnI"
str2 = "jIRl\nViBu\nrWOb\nNkTB" 
strng --> "bNkTB\nhTrWO\nRTFVi\nCnnIj"

1st char of 1st line of str1 + all chars of last line of str2 --> "b" + "NkTB"
1st two chars of 2nd line of str1 + first three chars of second last line of str2 --> "hT" + "rWO"
1st three chars of 3rd line of str1 + first two chars of third last line of str2 -- > "RTF" + "Vi"
1st four chars of 4th line of str1 + first char of first line of str2 --> "CnnI" + "j"

Pattern: counter for str1 increments by 1 and counter for str2 decrements by one as we move through the sections

arr1 = ["byGt, hTts, RTFF, CnnI"]
arr2 = ["jIRl, ViBu, rWOb, NkTB"]

result = []

arr[0].slice(0, 1) + arr2[3].slice() -> "bNkTB"

result = ["bNkTB"]

arr[1].slice(0, 2) + arr2[2].slice(0, 3) -> "hTrWO"

result = ["bNkTB", "hTrWO"]

arr[2].slice(0, 3) + arr2[1].slice(0, 2) -> "RTFVi"

result = ["bNkTB", "hTrWO", "RTFVi"]

arr[3].slice(0, 4) + arr2[0].slice(0, 1) -> "CnnIj"

result = ["bNkTB", "hTrWO", "RTFVi", "CnnIj"].join("\n")

Pattern:

arr1[i].slice(0, i + 1) + arr[substr.length - 1].slice(0, substr.length - 1)

Mental Model:

Split str1 and str2 into arrays. Iterate over str1. On each iteration, grab the first char of substring from str1 and grab all the chars from the last
substring of str2 and concat them and push them to the result array. On the next iteration, grab the first two chars of the second substring of str2 and
the first three chars of the third substring of str2 and concat them and add it to the result array. continue pattern for remaining substrings.



Algorithm:

*/

const compose = (str1, str2) => {
  let result = [];
  const [arr1, arr2] = [str1.split('\n'), str2.split('\n')];
  let len = arr2[0].length

  arr1.forEach((substr, idx) => {
    let part1 = substr.slice(0, idx + 1);
    let part2 = arr2[len - idx - 1].slice(0, (idx === 0 ? len : len - idx))
    result.push(part1 + part2);
  })

  return result.join('\n');
}


console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB") == "bNkTB\nhTrWO\nRTFVi\nCnnIj") // true
console.log(compose("HXxA\nTGBf\nIPhg\nuUMD", "Hcbj\nqteH\nGbMJ\ngYPW") == "HgYPW\nTGGbM\nIPhqt\nuUMDH") // true
console.log(compose("tSrJ\nOONy\nsqPF\nxMkB", "hLqw\nEZuh\nmYFl\nzlYf") == "tzlYf\nOOmYF\nsqPEZ\nxMkBh") // true