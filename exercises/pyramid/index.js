// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Iterative
function pyramid(n) {
  // get midpoint column of pyramid
  const midpoint = Math.floor((2 * n - 1) / 2)

  for (let row = 0; row < n; row++) {
    let level = ''

    // cols = 2n - 1 rows
    for (let col = 0; col < 2 * n - 1; col++) {
      // check we're inside of a certain bracket of nrs
      if (midpoint - row <= col && midpoint + row >= col) {
        level += '#'
      } else {
        level += ' '
      }
    }

    console.log(level)
  }
}

module.exports = pyramid
