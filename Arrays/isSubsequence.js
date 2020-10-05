function isSubsequence(str1, str2) {
    
    let arrResult = "";
    let masterStrArray = str1.split('').reverse();
    
    for(let i = 0; i < str2.length; i++) {
        if(masterStrArray.indexOf(str2[i]) > -1) {
            if(masterStrArray.length > 0) {
                arrResult += masterStrArray.pop();
            }
        }
    }
    
    if(arrResult === str1) {
        return true;
    }
    
    return false;
}

console.log(isSubsequence("sing", "strin"));