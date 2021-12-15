// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {}

// Iterative - Linear runtime / O(n)
const fibIt = n => {
  const result = [0, 1]

  for (let i = 2; i <= n; i++) {
    // OR replace 'i' with 'result.length'
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b)
  }

  // OR replace 'n' with 'result.length - 1'
  return result[n]
}

module.exports = fibIt
