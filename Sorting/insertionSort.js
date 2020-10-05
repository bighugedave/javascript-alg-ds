// Insertion sort has O(n^2) complexity worst case
// However, if the array is partially sorted then the search will be faster

function insertionSort(arr) {
    if(arr.length === 0) {
        return -1;
    }
    
    let j = 0;
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    
    return arr;
}

console.log(insertionSort([64, 48, 31, 12, 9, 174]));
console.log(insertionSort([-10, 2, 1, 12, -12, 55]));
console.log(insertionSort([]));
