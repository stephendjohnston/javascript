/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

input: array of arrays (each nested array has length of 9)
output: boolean (indicating whether the board is valid or not)

Rules:
- each row must contain digits 1-9 without repetition
- each column (same index of each nested array) must contain digits 1-9 without repetition
- each of the nine 3x3 sub boxes of the grid must contain the digits 1-9 without repetition
- the board may be only partially filled
- only filled cells need to be validated
- empty cells are displayed as "."

Examples:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

each row only contains digits 1-9 without repetition
each column only contains digits 1-9 without repetition

Data Structures:
- Array

Mental Model:
We need to validate each row, column and 3x3 grid.
Validating each row:
- if a cell is ".", continue to next cell
- if cell is a string Number, check to see if it already exists in hash, otherwise add to hash with value of true
- if it already exists in the hash we can return false

Validating each Column:
- create a hash where the keys are indexes and the values are arrays
- this will allow us to add the values at the current indexes to the arrays at that index
- for each value at an index, we can check if that value exists in the array for that index and
if it does, return false, otherwise you add it to the array at that index and continue

Validating each 3x3 Grid
- 
*/

const isValidSudoku = function(board) {
  const columns = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []};
  const grids = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []};

  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    let seenRowValues = {};

    for (let j = 0; j < row.length; j++) {
      let currentCell = row[j];

      if (currentCell === ".") {
        continue;
      }

      updateGrid(i, j, grids, currentCell);

      // test for non-digits
      if (/[^1-9]/g.test(currentCell)) return false;

      // check if repeated digit in row
      if (seenRowValues[currentCell]) return false;

      // check if repeated digit in column
      if (columns[j].includes(currentCell)) return false;

      seenRowValues[currentCell] = true;
      columns[j].push(currentCell);
    }
  }
  
  for (let grid in grids) {
    let gridCopy = new Set(grids[grid])

    if (gridCopy.size !== grids[grid].length ) return false;
  }

  return true;
};

function updateGrid(i, j, grids, currentCell) {
  if (i < 3 && j < 3) {
    grids[0].push(currentCell);
  } else if (i < 3 && j < 6) {
    grids[1].push(currentCell);
  } else if (i < 3 && j > 5) {
    grids[2].push(currentCell);
  } else if (i < 6 && j < 3) {
    grids[3].push(currentCell);
  } else if (i < 6 && j < 6) {
    grids[4].push(currentCell);
  } else if (i < 6 && j > 5) {
    grids[5].push(currentCell);
  } else if (i < 9 && j < 3) {
    grids[6].push(currentCell);
  } else if (i < 9 && j < 6) {
    grids[7].push(currentCell);
  } else if (i < 9 && j > 5) {
    grids[8].push(currentCell);
  }
}

const board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));