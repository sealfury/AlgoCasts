// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 1
const chunkSimple = (array, size) => {
  // Create empty array to hold chunks called 'chunked'
  const chunked = []
  // For each element in 'unchunked' array
  for (let element of array) {
    // Retrieve last element in 'chunked'
    const last = chunked[chunked.length - 1]

    // IF last element does not exist or if length is eq to chunk size
    if (!last || last.length === size) {
      // Push a new chunk into 'chunked' w/ current element
      chunked.push([element])
    } else {
      // ELSE add current element into the chunk
      last.push(element)
    }
  }

  return chunked
}

// SOLUTION 2
const chunkSmooth = (array, size) => {
  // Create empty 'chunked' array
  const chunked = []
  // Create 'index'; start at 0
  let index = 0

  // While index is less than array.length
  while (index < array.length) {
    // Push a slice of length 'size' from 'array' into 'chunked'
    chunked.push(array.slice(index, index + size))

    // Add 'size' to 'index'
    index += size
  }

  return chunked
}

module.exports = chunkSmooth
module.exports = chunkSimple
