function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    let strNum = num.toString();
    return strNum.length;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for(let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    
    return maxDigits;
}

function radixSort(numArray) {
    let maxDigitCount = mostDigits(numArray);
    for(let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let j = 0; j < numArray.length; j++) {
            let digit = getDigit(numArray[j], i);
            digitBuckets[digit].push(numArray[j]);
        }
        numArray = [].concat(...digitBuckets);
    }
    return numArray;
}

console.log(radixSort([100,20,8456,1,10,454,37,91754,91745]));