var fs = require('fs');

const input = fs.readFileSync("./day2_input.txt", 'utf8');
// console.log(input);

const testIn = `5 1 9 5
7 5 3  
2 4 6 8`

const test = testIn.split('\n').map( (val) => {return val.split(' ').map( (val) => {return parseInt(val)} ) })
const challenge = input.split('\n').map( (val) => {return val.split('	').map( (val) => {return parseInt(val)} ) })

function checksum(sheet){
    return sheet.map( (row) =>  {
        const sorted = row.map( v => parseInt(v)).sort( (a,b) => a-b ).filter( v => !isNaN(v) );
        return sorted[sorted.length -1] - sorted[0];
    }).reduce( (a, b) => a+b, 0);
}



console.log(checksum(test))
console.log(checksum(challenge))


/**** PART 2 ****/
const testIn2 = `5 9 2 8
9 4 7 3  
3 8 6 5`
const test2 = testIn2.split('\n').map( (val) => {return val.split(' ').map( (val) => {return parseInt(val)} ) })

function evenlyDivisible(sheet){
    return sheet.map( (row) => {
        const noNaN = row.filter( v => !isNaN(v))
        for(var i=0; i<noNaN.length; i++){
            for(var j=0; j<noNaN.length; j++){
                if( j != i){
                    if( noNaN[i] % noNaN[j] == 0){
                        return noNaN[i] / noNaN[j];
                    }
                }
            }
        }
    }).reduce( (a,b) => a+b, 0);
}

console.log(evenlyDivisible(test2));
console.log(evenlyDivisible(challenge));