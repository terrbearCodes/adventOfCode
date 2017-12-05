const fs = require('fs');

const input = fs.readFileSync('day4_input.txt','utf8').split('\n');
let valids = []

/* part2 test */
const tests = `oiii ioii iioi iiio
iiii oiii ooii oooi oooo
a ab abc abd abf abj
abcde xyz ecdab
abcde fghij`.split('\n');

input.forEach( password => {
    const words = password.split(' ');
    if(!hasDuplicate(words) && !hasAnagrams(words)){
        valids.push(password);
    }
})

function hasDuplicate(words){
    let wordCounter = { };
    for(var i=0; i<words.length; i++){
        if(!wordCounter[words[i]]){
            wordCounter[words[i]] = 1
        }else{
            return true;
        }
    }
    return false;
}

/* 
    Anagrams are words that have the same letters rearranged
    Can determine anagrams by sorting letters of each word THEN checking for duplicates
*/
function hasAnagrams(words){
    const sortedByLetter = words.map( v => {
        return v.split('').sort().join('')
    })
    // console.log(sortedByLetter);
    return hasDuplicate(sortedByLetter)
}

// tests.forEach(v=>{
//     const words = v.split(' ');
//     console.log(hasAnagrams(words));
// })

console.log(valids.length); 