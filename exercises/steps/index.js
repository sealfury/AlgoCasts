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

module.exports = steps
