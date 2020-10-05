// Given two numbers return true if the numbers each have the same frequency of digits in them
function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    
    if(strNum1.length !== strNum2.length) {
        return false;
    }
    
    let lookup = {};
    for(let i = 0; i < strNum1.length; i++) {
        let letter = strNum1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    for(let i = 0; i < strNum2.length; i++) {
        let letter = strNum2[i];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    
    return true;
}