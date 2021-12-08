// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
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

module.exports = anagrams
