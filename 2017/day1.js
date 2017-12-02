var assert = require('assert');
var fs = require('fs');

const tests = {
    "1122": 3,
    "1111": 4,
    "1234": 0,
    "91212129": 9
}

const tests2 = {
    "1212": 6,
    "1221": 0,
    "123425": 4,
    "123123": 12,
    "12131415": 4
}

const input = fs.readFileSync("./day1_input.txt", 'utf8');

function doIt(str, indexCompareFunction){
    const digits = str.split('');
    let toSum = []
    for(var i = 0; i< digits.length; i++){
        if(digits[i] == digits[ indexCompareFunction(i, digits) ] ){
            toSum.push( parseInt(digits[i]) );
        }
    }
    return toSum.reduce( (a,b) => a + b, 0);
}

const adjacent = (i, digits) => { return (i + 1) % digits.length } //PART1
const halfway = (i, digits) => { return (i+digits.length/2) % digits.length  } //PART2

//Tests - 
Object.keys(tests).forEach((test) => {
    assert.equal(tests[test], doIt(test, adjacent));
})


console.log(`PART 1: ${doIt(input, adjacent)}`);


Object.keys(tests2).forEach( (test) => {
    assert.equal(tests2[test], doIt(test, halfway));
})

console.log(`PART 2: ${doIt(input, halfway)}`);
