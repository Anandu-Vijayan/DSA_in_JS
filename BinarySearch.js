function orderAgnosticBinarySearch(array,target){

    let start = 0;
    let end = array.length - 1;

    if(array[0] <= array[end]){ // Array is sorted in Ascending Order

        while(start <= end){

            let mid = Math.floor(((start + end) / 2));
    
            if(array[mid] == target){
    
                // If the element is present in the Array
                const result = `The given target element is present in index ${mid} of the provided array.`;

                return result;
    
            }else if(target < array[mid]){
    
                end = mid - 1;
    
            }else{
    
                start = mid + 1
    
            }
    
        }
        
        // If the element is not present in the Array
        const result = `The given element: ${target} is not present in the provided array.`;

        return result;
        
    }else{ // Array is sorted in Descending Order

        while(start <= end){

            let mid = Math.floor(((start + end) / 2));

            if(array[mid] == target){

                // If the element is present in the Array
                const result = `The given target element is present in index ${mid} of the provided array.`;

                return result;

            }else if(target < array[mid]){

                start = mid + 1;

            }else{

                end = mid - 1

            }

        }    
        
        // If the element is not present in the Array
        const result = `The given element: ${target} is not present in the provided array.`;

        return result;

    }

}

let arr1 = [10,20,30,40,50,60];
let arr2 = [60,50,40,30,20,10];


function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid;  // Element found, return the index
        } else if (sortedArray[mid] < target) {
            left = mid + 1;  // Target is in the right half
        } else {
            right = mid - 1;  // Target is in the left half
        }
    }

    return -1;  // Element not found
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found in the array");
}

const resultOfSearch = orderAgnosticBinarySearch(arr1,50);

console.log(resultOfSearch);
