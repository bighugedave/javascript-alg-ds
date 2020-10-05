// Binary search works only on *sorted arrays*.
//
// Takes a midpoint of the array (a pivot) and searches through one half,
// if found ignores other half, otherwise focuses on other half.  Eliminates half each iteration.
//
// Divide & Conquer method

function binarySearch(arr, elem) {
    if (arr.length === 0) {
        return -1;
    }
    
    let leftPtr = 0;
    let rightPtr = arr.length - 1;
    let midPtr = Math.floor((leftPtr + rightPtr) / 2);
    
    while((arr[midPtr] !== elem) && (leftPtr <= rightPtr)) {
        if (elem < arr[midPtr]) {
            rightPtr = midPtr - 1;
        } else {
            leftPtr = midPtr + 1;
        }
        midPtr = Math.floor((leftPtr + rightPtr) / 2);
    }
    
    if(arr[midPtr] === elem) {
        return midPtr;
    }
    return -1;
}

console.log(binarySearch([1,4,9,10,21,22,28,34,55], 21));