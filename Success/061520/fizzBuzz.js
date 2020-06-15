function fizzBuzz(n) {
    for (let i=0; i <= n; i++) {
      if (i%15 === 0) {
        console.log("fizzbuzz")
      } 
      else if (i%3 === 0) {
        console.log("fizz")
      } 
      else if(i%5 === 0) {
        console.log("buzz")
      } 
      else {
        console.log(i)
      }
    }
  }
  
  //multi of 3 = fizz
  //multi of 5 = buzz
  //multi of 15 = fizzbuzz
  
  //fizzBuzz(100)
  
  function fizzBuzz2(m,n) {
    for (let i=m; i <= n; i++) {
      if (i%15 === 0) {
        console.log("fizzbuzz")
      } 
      else if (i%3 === 0) {
        console.log("fizz")
      } 
      else if(i%5 === 0) {
        console.log("buzz")
      } 
      else {
        console.log(i)
      }
    }
  }
  
  fizzBuzz2(4,20)