// Create a program that determines if a SubSudoku is valid

/*
  Args:
    matrix: an NxN array of arrays containing the matrix to check
  Returns:
    The string "VALID" if matrix contains a valid sub-sudoku solution, and
    "INVALID" otherwise
*/

// Examples: 

// [[1,2,3],
// [2,3,1],
// [3,1,2]]
// => VALID

// [[2,1,3],
// [2,3,1],
// [3,1,2]]
// => INVALID

// [[1,1,3],
// [2,3,1],
// [3,1,2]]
// => INVALID

// updated solution:

function validSubSudoku(matrix) {
    let length = matrix.length
    let clone = JSON.parse(JSON.stringify(matrix))
    clone.forEach(row => row.sort((a,b) => b-a))
    for (let i=0; i<clone.length; i++) {
      if (clone[i][0] !== length) return "INVALID"
      if (clone[i].length !== length) return "INVALID"
    }
    if (identicalCheck(clone) === false) return "INVALID"
    if (rowCheck(matrix) === false) return "INVALID"
    if (columnCheck(matrix) === false) return "INVALID"
    return "VALID"
}
  
function identicalCheck(clone) {
    let firstRow = clone.shift()
    for (let i=0; i<clone.length; i++) {
        let length = firstRow.length
        while (length--) {
            if (firstRow[length] !== clone[i][length]) return false
        }
    }
}
  
function rowCheck(matrix) {
    let length = matrix.length
    for (let i=0; i<length; i++) {
        if ([...new Set(matrix[i])].length !== length) return false
    }
}
  
function columnCheck(matrix) {
    let length = matrix.length
    let check = true
    for (let i=0; i<length; i++) {
        let column = matrix.map(value => value[i])
        if ([...new Set(column)].length !== length) {
            check = false
        }
    }
    return check
}

// submited solution: 

function checkSubSudoku(matrix) {
    // create a clone of the matrix
    let clone = JSON.parse(JSON.stringify(matrix)) 
    //  sort the clone from highest to lowest
    //  if the first element of each row does not equal N, we know the matrix is invalid
    clone.forEach(row => row.sort((a,b) => b-a))
    if (clone[0][0] !== matrix.length) return "INVALID"
    // check to see if all clone rows are equal. If they are not, we know the matrix is invalid 
    if (identicalCheck(clone) === false) return "INVALID"
    // check to see if the elements in each row and column are unique. If they are not, we know the matrix is invalid
    if (cleanRowCheck(matrix) === false) return "INVALID"
    if (cleanColumnCheck(matrix) === false) return "INVALID"
    // if all above checks pass, we know the matrix is valid
    return "VALID";
  }
  
  function identicalCheck(array) {
    /* 
      Since we are passing in the clone to this function, all rows of the matrix are still sorted.
      We compare them one by one to the first row, as they all need to be the same.
      If the lengths of the two rows we are comparing are not equal, we know that the matrix is invalid.
    */
    let firstRow = array.pop()
    for (let i=0; i < array.length; i++) {
      let j = firstRow.length
      if (j !== array[i].length) return false
      while (j--) {
        if (firstRow[j] !== array[i][j]) return false
      } 
    }
    return true
  }
  
  function cleanRowCheck(array) {
    // We create a unique Set of each row in the matrix. If the length of this Set does not equal N, we know the matrix is invalid
    let length = array.length
    let check = true
    array.forEach(row => {
      if ([...new Set(row)].length !== length) {
        check = false
      }
    })
    return check
  }
  
  function cleanColumnCheck(array) {
    // We create a unique Set of each column in the matrix. If the length of this Set does not equal N, we know the matrix is invalid 
    let length = array.length
    for (let i=0; i<length; i++) {
      let column = array.map((value) => value[i])
      if ([...new Set(column)].length !== length) {
        return false
      }
    }
    return true
  }
  
  // DO NOT MODIFY BELOW THIS LINE
  
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
  });
  
  var matrix = [];
  
  rl.on('line', (line) => {
    line = line.trim();
    if (line == '') return;
    matrix.push(line.split(' ').map(Number));
  }).on('close', () => {
    console.log(checkSubSudoku(matrix));
  });
  