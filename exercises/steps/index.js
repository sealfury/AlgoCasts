// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* RECOMMENDED SOLUTION *
 * From 0 to n (iterate thru rows)
 *** Create an empty string, 'stair'
 *** From 0 to n (iterate thru columns)
 ***** IF the current column is equal to or less than the current row (i.e. c0 <= r1)
 ******* Add a '#' to 'stair'
 ***** ELSE
 ******* Add a space to 'stair'
 *** Console log 'stair'
 */
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }

    console.log(stair)
  }
}

/* RECURSION SOLUTION *
 *  If (row ===n) then we have hit the end of our problem
 *  If the 'stair string has a length === n then we are at
 *  the end of a row
 *  If the length of the stair string is less than or equal to
 *  the row number we're working on, we add a '#',
 *  otherwise add a space
 */
const stepsRecursion = (n, row = 0, stair = '') => {
  // define base case & check if it's satisfied
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return stepsRecursion(n, row + 1)
  }

  const addedVal = stair.length <= row ? '#' : ' '

  stepsRecursion(n, row, stair + addedVal)
}

module.exports = steps
module.exports = stepsRecursion
