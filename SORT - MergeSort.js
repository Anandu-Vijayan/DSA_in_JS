// ====================================MERGE SORT====================================

function mergeSort(arr, lowIndex = 0, highIndex = arr.length - 1) {

  if (lowIndex >= highIndex){ // Base Condition for Recursion
      
    return;

  }

  const mid = Math.floor((lowIndex + highIndex) / 2);

  mergeSort(arr, lowIndex, mid); // left half

  mergeSort(arr, mid + 1, highIndex); // right half

  merge(arr, lowIndex, mid, highIndex); // merging sorted halves

}



function merge(arr, lowIndex, mid, highIndex) {

  const temp = []; // temporary array

  let left = lowIndex; // starting index of left half of arr

  let right = mid + 1; // starting index of right half of arr

  //storing elements in the temporary array in a sorted manner//
  while (left <= mid && right <= highIndex) {

    if (arr[left] <= arr[right]) {

      temp.push(arr[left]);

      left++;

    } else {

      temp.push(arr[right]);

      right++;

    }

  }

  // If there are elements remaining on the Left half //
  while (left <= mid) {

    temp.push(arr[left]);

    left++;

  }

  // If there are elements remaining on the Right half //
  while (right <= highIndex) {

    temp.push(arr[right]);

    right++;

  }

  // Transferring all elements from temporary to arr //
  for (let i = lowIndex; i <= highIndex; i++) {

    arr[i] = temp[i - lowIndex];

  }

}



// =============================TEST CASE=============================


const arr1 = [9, 4, 7, 6, 3, 1, 5];

console.log("Before sorting array: " + arr1);

mergeSort(arr1);

console.log("After sorting array: " + arr1);





// Function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Concatenate values into result array in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate remaining elements of left or right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge sort function
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively split and merge arrays
  return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
