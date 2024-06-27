// 

function selectionSort(array){

  for(let i = 0; i< array.length - 1; i++){

    let minIndex = i;

    for(let j = i+1 ; j < array.length; j++){

      if( array[j] < array[minIndex]){

        minIndex = j;

      }

    }

    if( array[minIndex] < array[i] ){

      let temp = array[minIndex];

      array[minIndex] = array[i];

      array[i] = temp;

    }

  }
  return array;

}


// ================TEST CASES================

let arr1 = [91, 45, 93, 91, 65, 67, 40];

console.log(arr1);

console.log(selectionSort(arr1))

console.log(arr1.length);
//==============================================================================================//

// Selection sort function
function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted portion
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted portion
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}

// Example usage
const array = [34, 7, 23, 32, 5, 62];
const sortedArray = selectionSort(array);
console.log(sortedArray); // Output: [5, 7, 23, 32, 34, 62]
