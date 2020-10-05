// Bubble sort time complexity is O(n^2) worst case

function bubbleSort(arr) {
    
    // Use noSwaps to determine if there was a swap procedure, if not then we're done so break out of the loop
    let noSwaps = false;
    
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    
    return arr;
}

console.log(bubbleSort([1,30,21,6,89]));