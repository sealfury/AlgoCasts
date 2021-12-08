// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagramsOne(stringA, stringB) {
  const aMap = buildCharMap(stringA)
  const bMap = buildCharMap(stringB)

  if (Object.keys(aMap).length !== Object.keys(bMap).length) {
    return false
  }

  for (let char in aMap) {
    if (aMap[char] !== bMap[char]) {
      return false
    }
  }

  return true
}

const buildCharMap = str => {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}

// More straightforward solution
const anagramsTwo = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB)
}

const cleanString = str => {
  // replace using regex (to lowercase), convert to array, sort, join back to string
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagramsOne
module.exports = anagramsTwo
