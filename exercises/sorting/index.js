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
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }

    if (indexOfMin !== i) {
      let lesserVal = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = lesserVal
    }
  }

  return arr
}

//  Worst case runtime: n*log(n)
//  Method Difficulty: medium
function mergeSort(arr) {}

const merge = (left, right) => {
  const results = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
