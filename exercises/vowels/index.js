// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterative (more clear) Solution
function vowels(str) {
  let count = 0
  // checker w/ .includes() can be expanded to check for more things
  const checker = ['a', 'e', 'i', 'o', 'u']

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }

  return count
}

const vowelsRegex = str => {
  // regex to match chars in braces
  // g = don't stop after first match, i = case insensitive
  const matches = str.match(/[aeiou]/gi)

  return matches ? matches.length : 0
}

module.exports = vowelsRegex
module.exports = vowels
