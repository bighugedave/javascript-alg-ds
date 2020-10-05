function areThereDuplicates() {
    let arr = [];
    for(let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i].toString());
    }
    
    if (arr.length <= 1) return false;
    
    let left = 0;
    let right = arr.length - 1;
    for(let i = left; i < right; i++) {
        if (arr[i] === arr[right]) {
            return true;
        }
    }
    return false;
}

function areThereDuplicatesCheckSet() {
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesCheckSet(1,2,3));
console.log(areThereDuplicatesCheckSet(1,2,2));
console.log(areThereDuplicatesCheckSet('a', 'b', 'c', 'a'));
