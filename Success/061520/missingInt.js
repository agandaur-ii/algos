let test = [1,2,4,5] // => 3

function missingInt(array) {
  
  for (let i=1; i < array.length; i++) {
    if (array[i] - array[i-1] !== 1) {
      return array[i] - 1
    }
  }
 return -1
}