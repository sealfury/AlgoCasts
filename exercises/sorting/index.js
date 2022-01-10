// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//  Worst-case runtime: n^2 (not good for large datasets)
//  Method Difficulty: easiest
const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = lesser
      }
    }
  }

  return arr
}

//  Worst-case runtime: n^2 (fine for F.E. apps with e.g. 100 records)
//  Method Difficulty: easier
function selectionSort(arr) {}

//  Worst case runtime: n*log(n)
//  Method Difficulty: medium
function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
