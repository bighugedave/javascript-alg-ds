class AlgorithmTesting {
    
    validAnagram(strFirst, strSecond) {
        if(strFirst.length !== strSecond.length) {
            return false;
        }
        
        let lookup = {};
        
        for(let i = 0; i < strFirst.length; i++) {
            let letter = strFirst[i];
            lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
        }
        
        for(let i = 0; i < strSecond.length; i++) {
            let letter = strSecond[i];
            if(!lookup[letter]) {
                return false;
            } else {
                lookup[letter]--;
            }
        }
        
        return true;
    }
    
}

let a = new AlgorithmTesting();
let exists = a.validAnagram('test', 'test');
console.log(exists);