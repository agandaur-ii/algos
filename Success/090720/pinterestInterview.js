// first question

// convert the message into a matrix based on the indicated rows and columns.
// return the string in the order of this matrix's columns

const message1 = "One does not simply walk into Mordor";
const r1 = 6;
const c1 = 6;
// => Oe y Mnss ioe iwnr nmatddoploootlk r

const message2 = "1.21 gigawatts!";
const r2 = 5;
const c2 = 3;
// => 11iwt. gas2gat!
const r3 = 3;
const c3 = 5;
// => 1ga.it2gt1as w!

function encrypt(string, r, c) {
  let matrix = []
  let array = string.split('')
  while (array.length) {
    matrix.push(array.splice(0,c))
  }
  let newMatrix = []
  for (let i=0; i<c; i++) {
    matrix.forEach(row => {
      let a = []
      a.push(row[i])
      newMatrix.push(a)
    })
  }
  return newMatrix.flat().join('')
}

console.log(encrypt(message1, r1, c1))

// second question that I didn't get to

/*
Your friends are now complaining that it's too hard to make sure the lengths of their status updates are not prime numbers.

You decide to create a substitution cipher. The cipher alphabet is based on a key shared amongst those of your friends who don't mind spoilers.

Suppose the key is:
"The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!". 

We use only the unique letters in this key to set the order of the characters in the substitution table.

T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

(spaces added for readability)

We then align it with the regular alphabet:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
T H E Q U I C K O N Y X G B L R A S W D J M P V Z F

Which gives us the substitution mapping: A becomes T, B becomes H, C becomes E, etc.

Write a function that takes a key and a string and encrypts the string with the key.

Example:
key = "The quick onyx goblin, grabbing his sword, jumps over the lazy dwarf!"
encrypt("It was all a dream.", key) -> "Od ptw txx t qsutg."
encrypt("Would you kindly?", key) -> "Pljxq zlj yobqxz?"

Complexity analysis:

m: The length of the message
k: The length of the key


*/
