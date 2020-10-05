function findLongestSubstring(testString) {
    if(testString.length === 0) {
        return 0;
    }
    
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for(let i = 0; i < testString.length; i++) {
        let c = testString[i];
        if(seen[c]) {
            start = Math.max(start, seen[c]);
        }
        longest = Math.max(longest, i - start + 1);
        seen[c] = i + 1;
    }
    return longest;
}

console.log(findLongestSubstring('thisisawesome')); // 6