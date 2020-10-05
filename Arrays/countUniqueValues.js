// if not allowed to edit the original array
function countUniqueValues(arr) {
    
    if(arr.length === 0) {
        return 0;
    }
    
    let left = 0;
    let right = 1;
    let counts = 1;
    
    while(right < arr.length) {
        
        if (arr[left] === arr[right]) {
            right++;
            left++;
        } else {
            counts++;
            left++;
            right++;
        }
    }
    return counts;
}

// If allowed to edit original array
function countUniqueValues2(arr) {
    if (arr.length === 0) return 0;
    
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues([1,1,1,2,2,3,4,4,5,5,5,6,7,8,9,9,10,10,10,10,10]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -2, -1, 0]));
console.log("************************");
console.log("");
console.log(countUniqueValues2([1,1,1,2,2,3,4,4,5,5,5,6,7,8,9,9,10,10,10,10,10]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -2, -1, 0]));

