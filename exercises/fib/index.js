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

// Iterative - Linear runtime / O(n) - better performance solution
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

// Recursion - Exponential time algorithm :(
const fibRecSlow = n => {
  // aassume the given [0, 1] of series
  if (n < 2) {
    return n
  }

  return fibRecSlow(n - 1) + fibRecSlow(n - 2)
}

// Recursion using Memoization to solve runtime issues
const memoize = fn => {
  const callsCache = {}

  return (...args) => {
    if (callsCache[args]) {
      return callsCache[args]
    }

    const result = fn.apply(this, args)
    callsCache[args] = result

    return result
  }
}

const fibRecFast = memoize(fibRecSlow)

// module.exports = fibIt
// module.exports = fibRecSlow
module.exports = fibRecFast
