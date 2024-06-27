// ====================================QUICK SORT====================================

function quickSort(arr, lowIndex = 0, highIndex = arr.length - 1) {

    if (lowIndex < highIndex) {

      const pivotIndex = partition(arr, lowIndex, highIndex);

      quickSort(arr, lowIndex, pivotIndex - 1);

      quickSort(arr, pivotIndex + 1, highIndex);

    }
    return arr;
}
  
function partition(arr, lowIndex, highIndex) {

    const pivot = arr[highIndex];

    let i = lowIndex - 1;

    for (let j = lowIndex; j < highIndex; j++) {

        if (arr[j] <= pivot) {

            i++;

            [arr[i], arr[j]] = [arr[j], arr[i]];

        }

    }

    [arr[i + 1], arr[highIndex]] = [arr[highIndex], arr[i + 1]];

    return i + 1;
}


let arr1 = [5, 9, 2, 65, 5];

console.log("Unsorted Array", arr1);

quickSort(arr1);

console.log("Sorted Array", arr1);

//==========================================================SIMPLE=========================================//

// Partition function
function partition(array, low, high) {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

// Quicksort function
function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    const pi = partition(array, low, high);

    // Recursively sort elements before and after partition
    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
  return array;
}

// Example usage
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
