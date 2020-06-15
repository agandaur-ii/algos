// R, W, B
//return array so they are sorted in order of R,W,B
let array = ["B","W","W","R","R"] 
function sorty(array) {
  let wCount = 0
  let bCount = 0
  let rCount = 0

  for (let i=0; i<array.length; i++) {
    if (array[i]==="W") {
      wCount++
    } else if (array[i]==="B") {
      bCount++
    } else if (array[i]==="R") {
      rCount++
    } else {
      return "invalid array"
    }
  }

  let result = []

  for (let i=0; i<array.length; i++) {
    if (rCount) {
      result.push("R")
      rCount--
    } else if (wCount) {
      result.push("W")
      wCount--
    } else if (bCount) {
      result.push("B")
      bCount--
    }
  }
  return result
}

sorty(array)