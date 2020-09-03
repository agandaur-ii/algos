// Create a program that determines if a Sudoku is valid

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

function validSudoku(matrix) {
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